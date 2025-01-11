import { Paper, DetailList, Detail, Stack, Anchor } from "@src/components";

export function Banners() {
    const bannerInfo = [
        {
            description: 'このサイトのバナーです',
            file: 'banner.png',
            link: '#',
            title: 'てく野のサイト',
        },
        {
            description: 'yuinoidさんのサイトです',
            file: 'banner_100health.gif',
            link: 'https://yuinoid.neocities.org/',
            title: '100%health',
        },
        {
            description: '蝉暮せせせさんのサイトです',
            file: 'banner_little_girl_float_in.png',
            link: 'https://little-girl-float.in/',
            title: 'little-girl-float.in',
        },
        {
            description: 'よしなに。さんのサイトです',
            file: 'dokozonodot.gif',
            link: 'https://www.deepblue3000dot.com/index.html',
            title: 'どこぞのドット打ちのWeb',
        },
    ];

    return (
        <Paper>
            <section>
                <DetailList>
                    <Detail title={<h2 css={{ fontWeight: 'bold', }}>リンク・バナー</h2>}>
                        <Stack spacing="12px">
                            {bannerInfo.map(({ description, file, link, title }, i) => (
                                <DetailList key={i}>
                                    <Detail title={<p>{title}</p>}>
                                        <Anchor href={link} target={link === '#' ? undefined : '_blank'}>
                                            <img src={`/images/home/banners/${file}`} alt={title} />
                                        </Anchor>
                                        <p>{description}</p>
                                    </Detail>
                                </DetailList>
                            ))}
                        </Stack>
                    </Detail>
                </DetailList>
            </section>
        </Paper>
    );
}
