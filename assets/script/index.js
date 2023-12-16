'use strict';

function onEvent(event, selector, callback){
    return selector.addEventListener(event,callback);
}

function select(selector,parent = document){
    return parent.querySelector(selector);
}

function selectById(selector,parent = document){
    return parent.getElementById(selector);
}

function selectAll(selector,parent = document){
    return [...parent.querySelectorAll(selector)];
}

function create(element,parent=document){
    return parent.createElement(element);
}

const URL= 'https://randomuser.me/api/?nat=CA&results=10&seed=same';

const options = {
    method: 'GET',
    header:{
        'Content-Type' : 'application/json; charset=UTF-8'
    },
    mode:'cors',

};

onEvent('load',window,function(){
    getUser();
});

async function getUser(){
    try{
        const response = await fetch (URL, options);
        if(!response.ok){
            throw new Error(`${response.statusText} (${response.status})`);
        }
        const data = await response.json();
        console.log(data.results);
        showUser(data.results);
    }catch(error){
        console.log(error.message);
    }
}

function showUser(users){
    const userBoard = selectById('user-board');
    users.forEach(element => {
        //console.log(element);
        userBoard.innerHTML += `<div class="row dark-font align-left user-board">
        <div class="column"><img src="${element.picture.thumbnail}" class="photo"></div>
        <div class="column width-120">
            <div>${element.name.first} ${element.name.last}</div>
            <div class="shallow-font">${element.location.city} ${element.location.country}</div>
        </div>
        <div class="column"><img src="./assets/image/add-16.png"></div>
    </div>`;
    });
}