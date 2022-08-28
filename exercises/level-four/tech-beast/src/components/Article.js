export default function Article(props){
    
    return (
        <div className="article--subcontainer">
            <p className="article--title"><a href={props.link} target="_blank" >{props.title}</a></p>
            <p className="article--source">from {props.source}</p>
            <p className="article--description">{props.description}</p>
        </div>
    )
}