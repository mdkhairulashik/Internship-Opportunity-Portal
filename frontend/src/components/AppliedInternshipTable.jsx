import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

export const AppliedInternshipTable = () => {
    const {allAppliedInternships=[]} = useSelector(store=> store.internship);
    return (
    <div>
        <Table>
            <TableCaption>All Applied Internships of Yours</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>Internship Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>



                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allAppliedInternships.length <= 0 ? <span>You haven't applied any internship yet.</span> : allAppliedInternships.map((appliedInternship) => (
                        <TableRow key={appliedInternship._id}>
                            <TableCell>{appliedInternship?.createdAt?.split("T")[0]}</TableCell>
                            <TableCell>{appliedInternship.internship?.title}</TableCell>
                            <TableCell>{appliedInternship.internship?.company?.name}</TableCell>
                            <TableCell className="text-right"><Badge className={`${appliedInternship?.status === "rejected" ?  'bg-red-400' : appliedInternship.status === 'pending' ? 'bg-gray=400' : 'bg-green-400' }`}>{appliedInternship.status.toUpperCase()}</Badge></TableCell>


                        </TableRow>
                    ))
                }


            </TableBody>
        </Table>

    </div>
  )
}

export default AppliedInternshipTable