data-group="Zoeksuggesties"
data-group="categoriën"

.c-header**search-suggestions-list[data-group]:before, .c-header**search-suggestions-list_new[data-group]:before{
display: inline-block;
width: 97%;
padding: 0 .5rem;
text-align: right;
line-height: 1.5rem;
color: #828282;
font-size: .625rem;
content: attr(data-group);
}

.c-header\_\_search-suggestions-list_new {
position: absolute;
top: 100%;
width: 100%;
list-style: none;
background: #fff;
box-shadow: 1px 12px 15px 0 rgb(0 0 0 / 20%);
border: 1px solid #d1d1d1;
border-top: none;
border-radius: 0 0 5px 5px;
z-index: 999;
box-sizing: border-box;
padding-bottom: 5px;
}

.c-header\_\_search-suggestions-list_new li:last-child{
border-top: solid 2px #ececec;
}

// TODO

TO check met daan Hoe meten we dit
Lijntje onder laatste element
Icoontjes weg

Dynamischer maken
