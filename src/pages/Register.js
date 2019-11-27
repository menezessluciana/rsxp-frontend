import React from 'react';
import CompanyForm from '../components/Register/CompanyForm';
import SchoolForm from '../components/Register/SchoolForm';
import StudentForm from '../components/Register/StudentForm';

export default function({ match }) {

    switch(match.params.type) {
        case "studenty":
            return <StudentForm />
        case "school":
            return <SchoolForm />
        case "company":
            return <CompanyForm />
        default: return <CompanyForm />
    }
}