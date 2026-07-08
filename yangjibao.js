export default async function (ctx) {
    const url = ctx.request.url;

    let body;
    try {
        body = JSON.parse(ctx.response.body);
    } catch (e) {
        return;
    }

    if (/account|vip_info/.test(url)) {
        if (body.data) {
            body.data.vip_label = true;
            body.data.vip_expiry_date = "2099-12-31";
            body.data.is_pay = true;
        }
    }

    if (/unify_ad/.test(url)) {
        body.data = null;
    }

    ctx.response.body = JSON.stringify(body);
}
