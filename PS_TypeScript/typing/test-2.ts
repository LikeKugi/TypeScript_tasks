enum EnumStatus {
    'published',
    'draft',
    'deleted'
}

type TypeRequest = {
    topicId: number
    status: EnumStatus,
}

interface IResponse {
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: EnumStatus,
}

async function getFaqs(req: TypeRequest):Promise<IResponse> {
    const res: Response = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data: IResponse = await res.json();
    console.log(data.status);
    return data;
}
