from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET", "POST"])
def hello():

	# Scrape the job profiles if it is POST request
	if request.method == "POST":

		# Store the user inputs in variables
		job_position = request.json["jobPosition"]
		job_location = request.json["jobLocation"]

		# URL of the web site from which the job profiles will be scraped
		url = f'https://www.timesjobs.com/candidate/job-search.html?searchType=personalizedSearch&from=submit&txtKeywords={job_position}&txtLocation={job_location}'

		# Access the website and store the result in a varibale
		r = requests.get(url)

		# Pass the source code of the webpage to BeautifulSoup for web scraping
		soup = BeautifulSoup(r.content, 'lxml')

		# Create an empty dictionary
		d1 = []

		# Find all the <li> elements with the below class name
		try:
			lis = soup.find_all('li', class_='clearfix job-bx wht-shd-bx')
		except:

			# Print the error if element not found
			print("Could not find job profiles!")

		# Keep the count of the job profiles scraped
		count = 0

		# Loop through the list "lis"
		for li in lis:

			# Find and print the job position. Else print the error
			try:
				position = li.h2.find('a')
				position = position.text.strip()
				print(position)
			except:
				print("Position not available!")

			# Find and print the company name
			try:
				company_name = li.find('h3', class_='joblist-comp-name')	
				company_name = company_name.text.strip()
				print(company_name)
			except:
				print("Company Name not available!")

			# Find and print the experience
			try:
				experience = li.find('ul', class_='top-jd-dtl clearfix')
				experience = experience.find_all('li')[0]
				experience = experience.text[11:]
				print(experience)
			except:
				print("Experience not available!")

			# Find and print the location
			try:
				location = li.find('ul', class_='top-jd-dtl clearfix')
				location = location.find_all('li')[1].span
				location = location.text
				print(location)
			except:
				print("Location not available!")

			# Find and print the job description
			try:
				job_desc = li.find('ul', class_='list-job-dtl clearfix')
				job_desc = job_desc.find_all('li')[0]
				job_desc = job_desc.text[19:-13]
				print(job_desc)
			except:
				print("Job Description not available!")

			# Find and print the apply link
			try:
				link = li.find('ul', class_='list-job-dtl clearfix')
				link = link.li.find('a')
				link = link.get('href')
				print(link)
			except:
				print("Link not available!")
			
			print('-'*100)
			count += 1

			# Store the job results in a dictionary
			d = {}
			d["id"] = count
			d["Position"] = position
			d["CompanyName"] = company_name
			d["Experience"] = experience
			d["Location"] = location
			d["JobDescription"] = job_desc
			d["ApplyLink"] = link

			d1.append(d)

		# Return the dictionary as a response
		return jsonify(d1)

if __name__ == "__main__":
	app.run(debug=True)