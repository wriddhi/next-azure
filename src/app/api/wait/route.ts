import {NextRequest, NextResponse} from "next/server";

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export async function GET(req: NextRequest) {
    const time = Number(req.url.split('?')[1].split('=')[1] ?? 0);

    await wait(time);

    return NextResponse.json({time})
}