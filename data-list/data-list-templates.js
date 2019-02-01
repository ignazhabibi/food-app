export const dataListHeaderTemplate = /*html*/`
    <style>
        :host {
            text-transform: uppercase;
            line-height: 1;
            font-size: 16px;
            padding: 5px 0 20px 10px;
            margin: 10px 0 20px 0;
            border-bottom: 1px solid black;
            display: block;
        }
    </style>
    <slot></slot>
`; 

export const dataListContentTemplate = /*html*/`
    <style>
        :host {
            min-width: 100px;
            flex-grow: 1;
            margin-left: 10px;
            padding-bottom: 20px;
            border-bottom: 1px solid gray;
            display: block;
        }
        ::slotted(h3) {
            margin: 0;
            padding: 0;
            line-height: 1;
            font-weight: normal;
        }
        ::slotted(p) {
            margin: 0;
            padding: 0;
            font-size: 12px;
            color: gray;
        }
    </style>
    <slot></slot>
`;

export const dataListIconTemplate = /*html*/`
    <style>
        img {
            margin-left: 10px;
            border-radius: 50%;
            width: 40px;
            height: 40px;
        }

        .placeholder {
            margin-left: 10px;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            background-color: gray;
        }
    </style>
    <img>    
`;

export const dataListSequenceTemplate = /*html*/`
    <style>
        :host {
            color: gray;
            font-size: 11px;
            padding-right: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid gray;
            display: block;
        }        
    </style>   
    <slot></slot>
`;

export const dataListItemTemplate = /*html*/`
    <style>
        :host {
            display: flex;
            flex-flow: row nowrap;
            margin-left: 10px;
            margin-bottom: 20px;
        }        
    </style>   
    <slot></slot>
`;

export const dataListTemplate = /*html*/`
    <style>
        :host {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin-bottom: 50px;
            display: block;
        }
    </style>   
    <slot></slot>
`;