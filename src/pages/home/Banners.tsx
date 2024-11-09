import { Paper, DetailList, Detail } from "@src/components";

export function Banners() {
    const bannerInfo = [
        {
            file: 'banner.png',
            title: 'てく野のサイト',
            description: 'このサイトのバナーです',
        },
        {
            file: 'banner_100health.gif',
            title: '100%health',
            description: 'yuinoidさんのサイトです',
        },
        {
            file: 'banner_little_girl_float_in.png',
            title: 'little-girl-float.in',
            description: '蝉暮せせせさんのサイトです',
        },
        {
            file: 'dokozonodot.gif',
            title: 'どこぞのドット打ちのWeb',
            description: 'よしなに。さんのサイトです',
        },
    ];

    return (
        <Paper>
            <section>
                <DetailList>
                    <Detail title={<h2 css={{ fontWeight: 'bold', }}>リンク・バナー</h2>}>
                        <DetailList>
                            {bannerInfo.map(({ description, file, title }, i) => (
                                <Detail key={i} title={<p>{title}</p>}>
                                    <img src={`/images/home/banners/${file}`} alt={title} />
                                    <p>{description}</p>
                                </Detail>
                            ))}
                        </DetailList>
                    </Detail>
                </DetailList>
            </section>
        </Paper>
    );
}
