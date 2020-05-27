import React from "react";
import { Article, ArticleProps } from "./Article";
import { Filter } from "./Header";
import Visa from "../img/articles/visa.jpg"
import Capital from "../img/articles/capital_on_tap.jpg";
import FCA from "../img/articles/fca.jpg";
import Donate from "../img/articles/donate_direct.png";


const articles: ArticleProps[] = [
    {
        title: "London FinTech TrueLayer partners with Visa ",
        image: Visa,
        link: "https://www.pymnts.com/news/partnerships-acquisitions/2019/london-fintech-truelayer-partners-with-visa/",
        date: new Date(2019, 9, 29),
        source: "PYMNTS",
        type: Filter.NEWS,
        summary: "London API provider TrueLayer is collaborating with Visa, which now has a minority stake in the FinTech as part of a $35 million Series C funding round in June"
    },
    {
        title: "TrueLayer rolls out account-to-account charity application",
        image: Donate,
        link: "https://www.finextra.com/newsarticle/35820/truelayer-rolls-out-account-to-account-charity-application",
        date: new Date(2020, 4, 13),
        source: "Finextra",
        type: Filter.NEWS,
        summary: "TrueLayer has launched a fee-free, stand-alone charity donation app using Payments Initiation technology for account-to-account transfers.",
    },
    {
        title: "TrueLayer responds to FCA consultation on Open Finance",
        image: FCA,
        link: "https://www.finextra.com/pressarticle/82448/truelayer-responds-to-fca-consultation-on-open-finance",
        date: new Date(2020, 4, 11),
        source: "Finextra",
        type: Filter.ANNOUNCEMENTS,
        summary: "Jack Wilson, Head of Policy and Regulatory Affairs at TrueLayer, discusses TrueLayer's response to the FCA's Open Finance consultation.",
    },
    {
        title: "Capital on Tap and TrueLayer partner to speed up access to loans for small businesses",
        image: Capital,
        link: "https://www.finextra.com/pressarticle/82264/capital-on-tap-and-truelayer-partner-to-speed-up-access-to-loans-for-small-businesses",
        date: new Date(2020, 3, 23),
        source: "Capital on Tap",
        type: Filter.ANNOUNCEMENTS,
        summary: "Digital lender Capital on Tap has partnered with leading provider of financial APIs TrueLayer to increase the speed and flexibility of loans to SMEs.",
    },
    
];


export const ArticleList: React.FC<{filter: Filter}> = (props) => {

    const filteredArticles = props.filter !== Filter.ALL ? articles.filter(article => article.type === props.filter) : articles;
    const sortedArticles = filteredArticles.sort((a, b ) => {return (a.date > b.date ? -1 : 1)});

    return (
    <div className="bg-layers-top">
        <div id="articles"/>
        <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 mt-5 pt-4">
                { sortedArticles.map(article => 
                    <Article
                        {...article}
                    />)
                }
            </div>
            <div className="col-md-2">
            </div>
        </div>
        <div className="bg-layers-bottom cs-bottom custom-position"></div>
    </div>
    );
}