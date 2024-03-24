import localFont from 'next/font/local';

export const Montserrat = localFont({
    src: [
        { path: '../public/font/Montserrat/Montserrat-Thin.ttf', weight: '100' },
        { path: '../public/font/Montserrat/Montserrat-Regular.ttf' },
        { path: '../public/font/Montserrat/Montserrat-Medium.ttf', weight: '500' },
        { path: '../public/font/Montserrat/Montserrat-SemiBold.ttf', weight: '600' },
        { path: '../public/font/Montserrat/Montserrat-Bold.ttf', weight: '700' },
        { path: '../public/font/Montserrat/Montserrat-ExtraBold.ttf', weight: '900' },
    ],
});

export const Montserrat_Alternates = localFont({
    src: [
        { path: '../public/font/Montserrat_Alternates/MontserratAlternates-Thin.ttf', weight: '100' },
        { path: '../public/font/Montserrat_Alternates/MontserratAlternates-Regular.ttf' },
        { path: '../public/font/Montserrat_Alternates/MontserratAlternates-Medium.ttf', weight: '500' },
        { path: '../public/font/Montserrat_Alternates/MontserratAlternates-SemiBold.ttf', weight: '600' },
        { path: '../public/font/Montserrat_Alternates/MontserratAlternates-Bold.ttf', weight: '700' },
        { path: '../public/font/Montserrat_Alternates/MontserratAlternates-ExtraBold.ttf', weight: '900' },
    ],
});

