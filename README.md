## Instructions 

To run the app locally run `yarn start` in the command line. 

To view the final project you can also visit the hosted version [here](https://amandakys.github.io/demo/)

## Design Choices

Primary Goal: A Press page that fits into the TrueLayer website. 

I decided to maintain the header section, but use a different coloured gradient. I chose green as I couldn't immediately find a green header on the side and constructed the gradient as per the brandbook. 

I was inspired by the Customers page on the website, specifically the sticky header and allowed uers to filter the content of the page. I decided to use this concept for my Press page. 

I wanted users to be able to filter between different types of articles. For this demo, I distinguished between company announcements, and news articles. Visually the distinction is made clear through a different colour base for the card's image tint and title line. I also noted the use of tags in the Customers page for each type of customer and built News and Announcement Tags.   

As cards were used throughout the site, I built a new card with the same rounded corners and box-shadow to represent an 'Article Card'. Key information displayed for each article are: title, summary, source and date. Each card would then direct users to a new page where the full article could be read. 


## Technical Choices 

I chose to use a React as I was most comfortable writing UIs in this format. In hindsight, this added additional overhead as I needed to port the source HTML file from the TrueLayer website into a React format. For this reason, a lot of the components in the app are just copy-pasted html. I did try to componentise any duplicated html I saw in the source code. As such files for which I wrote the most code are: `Article.tsx`, `ArticleList.tsx` and `Header.tsx`. 

Initially my main reason for wanting to use React was because I wanted to be able to generate Article cards based on an array of article data rather than manually writing multiple html sections. I may have been able to do this with vanilla javascript but I did not have experience with this. This card generation would make it easy to quickly add more articles, and made implementing article filtering easier. 

Unfortunately, I was not hugely familiar with Bootstrap. However, a lot of these classes were baked into the source HTML, so I did my best to continue using them in the components I wrote. 

One of the main limitations of my current code is that the header does not revert back to being its original colour when its not being as a sticky header. This is behaviour that it exhibits in the Customers page, but I was unable to replicate in a performant way using Intersection Observers in React. Given more time, I may have been able to work this out, but for now the header is always coloured based on the filter type, which leads to an inconsistent look when the Gradient header is also visible. 


