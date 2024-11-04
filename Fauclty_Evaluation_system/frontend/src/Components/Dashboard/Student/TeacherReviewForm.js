import React, { useState } from 'react';
import axios from 'axios';

const TeacherReviewForm = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        admissionNo: '',
        branchSemester: '',
        teacherName: '',
        teacherSubject: '',
        teacherDepartment: '',
        ratings: {
            conceptExplanation: 1,
            subjectKnowledge: 1,
            contentOrganization: 1,
            classTiming: 1,
            learningEnvironment: 1,
            studentParticipation: 1,
            feedbackQuality: 1,
            resourceUtilization: 1,
            innovation: 1,
            accessibility: 1,
            supportiveness: 1,
            professionalism: 1
        },
        suggestions: '',
        overallEvaluation: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in formData.ratings) {
            setFormData(prevFormData => ({
                ...prevFormData,
                ratings: {
                    ...prevFormData.ratings,
                    [name]: Number(value)
                }
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/review', formData);
            console.log(response.data.message);
        } catch (error) {
            console.error("Failed to submit review", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md space-y-4">
            <h2 className="text-xl font-semibold mb-4">Teacher Review Form</h2>

            {/* Student Details */}
            <div className="mb-4">
                <label className="block mb-1">Student Name *</label>
                <input 
                    type="text" 
                    name="studentName" 
                    value={formData.studentName} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Admission No *</label>
                <input 
                    type="text" 
                    name="admissionNo" 
                    value={formData.admissionNo} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Branch and Semester *</label>
                <input 
                    type="text" 
                    name="branchSemester" 
                    value={formData.branchSemester} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                    required
                />
            </div>

            {/* Teacher Details */}
            <div className="mb-4">
                <label className="block mb-1">Teacher Name *</label>
                <input 
                    type="text" 
                    name="teacherName" 
                    value={formData.teacherName} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Teacher Subject *</label>
                <input 
                    type="text" 
                    name="teacherSubject" 
                    value={formData.teacherSubject} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Department of Teacher *</label>
                <input 
                    type="text" 
                    name="teacherDepartment" 
                    value={formData.teacherDepartment} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                    required
                />
            </div>

            {/* Rating Questions */}
            {[
                { label: 'How well does the teacher explain concepts?', name: 'conceptExplanation' },
                { label: 'How knowledgeable is the teacher about the subject?', name: 'subjectKnowledge' },
                { label: 'Is the course content well-organized?', name: 'contentOrganization' },
                { label: 'Does the teacher start and end the class on time?', name: 'classTiming' },
                { label: 'How well does the teacher maintain a productive environment?', name: 'learningEnvironment' },
                { label: 'How well does the teacher encourage participation?', name: 'studentParticipation' },
                { label: 'Does the teacher provide constructive feedback?', name: 'feedbackQuality' },
                { label: 'How effectively does the teacher use resources?', name: 'resourceUtilization' },
                { label: 'Does the teacher use innovative methods?', name: 'innovation' },
                { label: 'Is the teacher accessible outside class?', name: 'accessibility' },
                { label: 'Does the teacher create a supportive environment?', name: 'supportiveness' },
                { label: 'Does the teacher demonstrate professionalism?', name: 'professionalism' },
            ].map((question, idx) => (
                <div key={idx} className="mb-4">
                    <label className="block mb-1">{question.label}</label>
                    <select 
                        name={question.name} 
                        value={formData.ratings[question.name]} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded"
                    >
                        {[1, 2, 3, 4, 5].map(score => (
                            <option key={score} value={score}>{score}</option>
                        ))}
                    </select>
                </div>
            ))}

            {/* Suggestions */}
            <div className="mb-4">
                <label className="block mb-1">Suggestions for improvement</label>
                <textarea 
                    name="suggestions" 
                    value={formData.suggestions} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* Overall Evaluation */}
            <div className="mb-4">
                <label className="block mb-1">Overall Evaluation of the Teacher</label>
                <select 
                    name="overallEvaluation" 
                    value={formData.overallEvaluation} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded"
                >
                    {[1, 2, 3, 4, 5].map(score => (
                        <option key={score} value={score}>{score}</option>
                    ))}
                </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Submit Review
            </button>
        </form>
    );
};

export default TeacherReviewForm;
