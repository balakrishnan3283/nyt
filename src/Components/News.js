import { React, useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Image from "../Images/noimg.png";
import InfiniteScroll
	from "react-infinite-scroll-component";

function News(props) {
	let category = props.category;
	let [articles, setArticles] = useState([]);
	let [totalResults, setTotalResults] = useState(0);
	let [page, setPage] = useState(1);

	let resultNews = async () => {
		const url =
`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=gOxGhzVDJuBTrUByoUcmEHAd8HKFO1kX`;
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(parsedData.results);
		setTotalResults(parsedData.num_results);
		console.log(articles.results)
	};

	useEffect(() => {
		resultNews();
	}, []);

	let fetchData = async () => {
// 		
const url =
`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=gOxGhzVDJuBTrUByoUcmEHAd8HKFO1kX`;

            
		setPage(page + 1);
		let data = await fetch(url);
		let parsedData = await data.json();
    
		setArticles(articles.concat(parsedData.results));
	};

	return (
		<InfiniteScroll
			//This is important field to render the next data
			dataLength={articles.length}
			next={fetchData}
			hasMore={
				articles.length < totalResults
			}
			loader={
				<h4 className="text-center">
					Loading...
				</h4>}
			endMessage={
				<p style={{ textAlign: "center" }}>
					<b>Yay! You have seen it all</b>
				</p>
			}
		>
			<div className="container my-3">
				<div className="row">
					{articles.map((element) => {
						return (
							<div className="col-md-4" key={element.url}>
								<NewsItem
									sourceName={element.source}
									title={element.title}
									desc={element.abstract}
									subsection={element.subsection}
									media = {element.media}
									imageURL=
									{element?.media['media-metadata']?
										element?.media['media-metadata']:
										Image}
									newsUrl={element.url}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</InfiniteScroll>
	);
}

export default News;
