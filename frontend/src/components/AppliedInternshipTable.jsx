import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

export const AppliedInternshipTable = () => {
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
                    [1,2,3,4].map((item,index) => (
                        <TableRow key={index}>
                            <TableCell>04-08-2025</TableCell>
                            <TableCell>Software Engineer</TableCell>
                            <TableCell>BRAC IT</TableCell>
                            <TableCell className="text-right"><Badge>Accepted</Badge></TableCell>


                        </TableRow>
                    ))
                }


            </TableBody>
        </Table>

    </div>
  )
}

export default AppliedInternshipTable