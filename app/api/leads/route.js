export async function GET(request) {
    const leads = [];

    return new Response(JSON.stringify(leads));
}