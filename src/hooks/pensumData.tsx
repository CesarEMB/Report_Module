import { GetSubject, GetListSubjects } from "../api/subjects";
import { useState } from "react";


//Interface
import { PensumData } from "../interface/pensum.interface";

interface list {
    list: [],
    year: string
}

interface subject {
    subject: string
}

const usePensumData = () => {

    const [pensumData, setPensumData] = useState<PensumData>()

    const getPensumData = async () => {
        try {
            const response = await GetListSubjects();
            const pensumData = response.data;
            const combinedDataPromises = pensumData.map(async (list: list) => {
                const subjectPromises = list.list.map((subject: subject) =>
                    GetSubject(subject.subject)
                );

                const subjectsData = await Promise.all(subjectPromises);
                return { ...list, list: subjectsData.map((response) => response.data) };
            });

            const combinedData = await Promise.all(combinedDataPromises);

            setPensumData({
                combinedData
            });
        } catch (error) {
            console.error(error);
        }
    }

    return {
        pensumData,
        getPensumData
    }

};

export { usePensumData }