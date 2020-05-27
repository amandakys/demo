import React from "react";


export enum Filter {
    ALL = "All",
    ANNOUNCEMENTS = "Announcements",
    NEWS = "News",
}

interface HeaderProps {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
    

    const selectColor = (filter: Filter) => {
        switch(filter) {
            case Filter.ALL: return "cyan-bg";
            case Filter.ANNOUNCEMENTS: return "gaming-bg";
            case Filter.NEWS: return "challenger-banks-bg";
        }
    }
    
    return (
        <div className={"custom-sticky"}>
            <div id="customers-buttons" className={`container flex col-12 customers-filter ${selectColor(props.filter)} custom-sticky`}>
                <div className="row">
                    <div className="py-2" id="story-buttons">
                        {props.filter === Filter.ALL ? <ActiveButton label={props.filter}/> : <Button label={Filter.ALL} onClick={() =>  props.setFilter(Filter.ALL)}/>}
                        {props.filter === Filter.ANNOUNCEMENTS ? <ActiveButton label={props.filter}/> : <Button label={Filter.ANNOUNCEMENTS} onClick={() =>  props.setFilter(Filter.ANNOUNCEMENTS)}/>}
                        {props.filter === Filter.NEWS ? <ActiveButton label={props.filter}/> : <Button label={Filter.NEWS} onClick={() =>  props.setFilter(Filter.NEWS)}/>}
                    </div>
                </div>
        </div>
        </div>
    );
}

export const ActiveButton: React.FC<{label: string}> = (props) => {
    return (
        <a href="#articles">
            <button type="button" className="btn btn-outline-white customer-btn all active">{props.label}</button>
        </a>
    )
};

export const Button: React.FC<{label: string, onClick: () => void }> =  (props) => {
    return (
        <a href="#articles">
            <button type="button" className="btn btn-outline-white customer-btn" onClick={props.onClick}>{props.label}</button>
        </a>
    )
}

