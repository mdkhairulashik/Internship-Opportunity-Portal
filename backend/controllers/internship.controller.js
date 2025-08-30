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
        // Ensure experienceLevel is a Number (coerce strings like "6 month" -> 6)
        if (req.body.experienceLevel !== undefined) {
            let val = req.body.experienceLevel;
            if (typeof val === 'string') {
              const m = val.match(/\d+/);
              val = m ? parseInt(m[0], 10) : Number(val);
            } else {
              val = Number(val);
            }

            if (Number.isNaN(val)) {
              return res.status(400).json({ success: false, message: 'Invalid experienceLevel. Provide a numeric value.' });
            }

            req.body.experienceLevel = val;
          }

        // Continue with creation using req.body
        const internship = await Internship.create(req.body);

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
        const internship = await Internship.findById(internshipId).populate({
            path:"applications"
        });
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
        const internships = await Internship.find({created_by: adminId}).populate({
            path:'company',
            createdAt : -1
        });
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
