export function Prompt(JOB_DESCRIPTION,RESUME){

    return `You are an expert ATS (Applicant Tracking System) resume analyzer and senior technical recruiter.

            Analyze the candidate's resume against the given Job Description.

            Evaluate the resume exactly like an ATS system would.

            Return ONLY valid JSON.
            Do not include markdown, explanations, or code fences.

            Job Description:
            ${JOB_DESCRIPTION}

            Resume:
            ${RESUME}

            Instructions:

            1. Calculate an ATS score between 0 and 100 based on:
            - Skills match
            - Relevant technologies
            - Work experience
            - Projects
            - Education
            - Keywords
            - Responsibilities
            - Certifications (if relevant)
            - Overall relevance to the job

            2. Identify all keywords from the Job Description.

            3. Compare those keywords with the resume.

            4. Separate them into:
            - Matching keywords
            - Missing keywords

            5. Provide suggestions to improve the resume specifically for this job.

            7. Identify the candidate's strengths that increase ATS score but dont return them just use them to modify ats score.

            8. Identify weaknesses that reduce the ATS score but dont return them just use them to modify ats score.

            Return ONLY this JSON structure:

            {
            "atsScore": 0,
            "matchingKeywords": [
                ""
            ],
            "missingKeywords": [
                ""
            ],
            "suggestions": "",
            ,
            Scoring Guidelines

            90-100:
            Excellent match.
            Very high chance of passing ATS.

            75-89:
            Strong match with minor improvements needed.

            60-74:
            Moderate match.
            Missing important keywords or experience.

            40-59:
            Weak match.
            Needs significant resume improvements.

            Below 40:
            Poor match.
            Resume should be rewritten for this role.

            Be objective.
            Do not invent experience that is not present in the resume.
            Never assume skills that are not explicitly mentioned.`
}