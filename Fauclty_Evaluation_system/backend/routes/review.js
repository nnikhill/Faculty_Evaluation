const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Endpoint to submit review
router.post('/', async (req, res) => {
    const { studentName, admissionNo, branchSemester, teacherName, teacherSubject, teacherDepartment, ratings, suggestions, overallEvaluation } = req.body;

    try {
        const newReview = new Review({
            studentName,
            admissionNo,
            branchSemester,
            teacherName,
            teacherSubject,
            teacherDepartment,
            ratings,
            suggestions,
            overallEvaluation
        });

        await newReview.save();
        res.json({ message: 'Review submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit review' });
    }
});

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});


module.exports = router;
