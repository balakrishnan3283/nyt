import React from "react";

function NewsItem(props) {
	let {
		desc, title, imageURL,
		newsUrl, sourceName, subsection,media
	} = props;
	return (
		<div>
			<div className="card my-3">
				<img src={imageURL}
					className="card-img-top" alt="..." width='100' height='100' />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="w-100 fs-6 
						text-body-secondary 
						text-end">
						- {sourceName}
					</p>
					<p>Category : {subsection}</p>
					<p className="card-text">{desc}</p>
					<a href={newsUrl}
						target="_blank"
						className="btn btn-primary btn-sm">
						Read More...
					</a>
				</div>
			</div>
		</div>
	);
}

export default NewsItem;
