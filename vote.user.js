// ==UserScript==
// @name         WSIS voter 2021
// @namespace    https://github.com/FarisHijazi/wsis-voter
// @version      0.1
// @description  automates the voting process given a list of projects to vote for on: https://www.itu.int/net4/wsis/stocktaking/Prizes/2021/Vote
// @author       You
// @match        https://www.itu.int/net4/wsis/stocktaking/Prizes/2021/Vote*
// @grant        none
// ==/UserScript==


var voteMap = {
    "AL C1.": "<PROJECT NAME>",
};

(function () {
    'use strict';

    var currentCatTitle = document.querySelector("body > div:nth-child(2) > section > div > div:nth-child(2) > div.col-12.col-md-10 > div > div > form > div > button > div > div > div").innerText;

    var dropdown = document.querySelector("body > div:nth-child(2) > section > div > div:nth-child(2) > div.col-12.col-md-10 > div > div > form > div > button > div > div > div");
    dropdown.click();
    dropdown.click();

    var availableCats = document.querySelectorAll("body > div:nth-child(2) > section > div > div:nth-child(2) > div.col-12.col-md-10 > div > div > form > div > div > div > ul > li > a");
    // reducing to only interesting Cats
    var ignoredCats = [].filter.call(availableCats, a => Object.keys(voteMap).filter(key => a.innerText.startsWith(key)).length == 0);
    ignoredCats.forEach(a => a.remove());

    availableCats = document.querySelectorAll("body > div:nth-child(2) > section > div > div:nth-child(2) > div.col-12.col-md-10 > div > div > form > div > div > div > ul > li > a");
    var projectFieldDivs = Array.from(document.querySelectorAll("#setWsisStatusForm > div"));

    var voted = false;
    for (const targetProject of Object.values(voteMap)) {
        for (const projectDiv of projectFieldDivs) {
            var title = projectDiv.querySelector('h6').innerText;
            var btn = projectDiv.querySelector('button');
            if (title.startsWith(targetProject)) {
                console.log('gonna press:', title, btn);
                btn.click();
                voted = true;
                return;
            }
        }
    }

    if (!voted) {
        var reducedCats = [].filter.call(availableCats, a => Object.keys(voteMap).filter(key => a.innerText.startsWith(key)).length != 0 && !a.innerText.startsWith(currentCatTitle));

        if (!reducedCats.length) {
            console.log('Going to "my votes", since nothing interesting here and no available interesting Cats.');
            var myVotesLink = document.querySelector("#logoutForm > a.d-inline-block.ml-3.icon.icon-before.icon-fw.fa-list-ol");
            myVotesLink.click();
        } else {
            console.log('this category is not interesting, going to category:', reducedCats[0]);
            reducedCats[parseInt(Math.random() * reducedCats.length)].click();
        }

    }

})();


var allCats = [
    "AL C1. The role of governments and all stakeholders in the promotion of ICTs for development",
    "AL C2. Information and communication infrastructure",
    "AL C3. Access to information and knowledge",
    "AL C4. Capacity building",
    "AL C5. Building confidence and security in use of ICTs",
    "AL C6. Enabling environment",
    "AL C7. E-government",
    "AL C7. E-learning",
    "AL C7. E-employment",
    "AL C7. E-environment",
    "AL C7. E-agriculture",
    "AL C7. E-science",
    "AL C8. Cultural diversity and identity, linguistic diversity and local content",
    "AL C9. Media",
    "AL C10. Ethical dimensions of the Information Society",
];
