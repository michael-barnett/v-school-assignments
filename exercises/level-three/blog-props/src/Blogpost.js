// pass through title, subTitle, author, and date through props.

export default function Blogpost(props){
    return (
        <div className="blogpost">
            <h1 className="title">{props.title}</h1>
            <h2 className="subTitle">{props.subTitle}</h2>
            <p>Posted by <span className="author">{props.author}</span> on <span className="date">{props.date}</span></p>
        </div>
    )
}