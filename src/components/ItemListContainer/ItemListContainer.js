import './ItemListContainer.scss'

export const ItemListContainer = ( props) => {

    return (
        <div className="container greeting">
            {props.greeting}
        </div>
    )
}
