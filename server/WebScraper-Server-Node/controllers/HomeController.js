const getHomePage = (req, res, next) => {
    res.status(200).send('Successful!')
}

const searchJob = (req, res, next) => {
    const {jobPosition, jobLocation} = req.body;

    const jobData = {
        jobPosition,
        jobLocation
    }

    res.status(201).json(jobData);
}

exports.getHomePage = getHomePage;
exports.searchJob = searchJob;