import { Internship } from "../models/internship.model.js";

//Admins will post internships for students
export const postInternship = async (req, res) => {
    try {
        const {title, description, requirements, salary, location, internshipType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !internshipType || !experience || !position || !companyId){
            return res.status(400).json({
                message: "Something is missing.",
                success: false

            })
        };
        const internship = await Internship.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            internshipType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New internship post created successfully.",
            internship,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}
//for students

export const getAllInternships = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title: {$regex: keyword, $options: "i"}},
                {description: {$regex: keyword, $options: "i"}},   
            ]
        };
        const internships = await Internship.find(query).populate({
            path: "company"
        }).sort ({createdAt : -1});
        if (!internships){
            return res.status(404).json({
                message: "Internships not found.",
                success: false
            })
        };
        return res.status(200).json({
            internships,
            success: true
        })

    } catch (error) { 
        console.log(error); 
    }
}

//for students
export const getInternshipById = async (req, res) => {
    try {
        const internshipId = req.params.id;
        const internship = await Internship.findById(internshipId);
        if (!internship){
            return res.status(404).json({
                message: "Internships not found.",
                success: false
            })

        };
        return res.status(200).json({internship, success: true});
    } catch (error){
        console.log(error);
    }
}

//How many internships are posted by admins

export const getAdminInternships = async (req, res) => {
    try {
        const adminId = req.id;
        const internships = await Internship.find({created_by: adminId});
        if (!internships){
            return res.status(404).json({
                message: "Internships not found.",
                success: false
            })

        };
        return res.status(200).json({
            internships,
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}
