import React from 'react';
import { Card, CardHeader, CardSubHeading, CardData, PageContainer } from '../styled-components';

const UserDetail = ({ data: userDetail }) => {
    const {
        username: userName, name: fullName, email, website,
        company: { name: companyName, catchPhrase: companyCatchPhrase, bs: companyBs } = {}
    } = userDetail || {};

    return (
        <PageContainer>
            <Card>
                <CardHeader>User Details</CardHeader>
                <CardData>Full Name: {fullName}</CardData>
                <CardData>User Name: {userName}</CardData>
                <CardData>Email: {email}</CardData>
                <CardData>Website: {website}</CardData>
                <CardSubHeading>Company Details</CardSubHeading>
                <CardData>Company Name: {companyName}</CardData>
                <CardData>Company Catch Phrase: {companyCatchPhrase}</CardData>
                <CardData>Company BS: {companyBs}</CardData>
            </Card>
        </PageContainer>
    )
};

export default UserDetail;