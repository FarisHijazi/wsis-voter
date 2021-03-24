# wsis-voter

Userscript to automate voting to wsis prizes 2021 given a list of items.  
WSIS: WORLD SUMMIT ON THE INFORMATION SOCIETY PRIZES 2021.

Support the projects you love by voting for them (it's not cheating if you were gonna do it anyway, it just saves you time).

## Installation

1. Install [Tampermonkey](install:tampermonkey-chrome) (
  [chrome](install:tampermonkey-chrome),
  [firefox](install:tampermonkey-firefox),
  [edge](install:tampermonkey-edge),
  ) for your browser (or any other [UserScript client][guide:get-user-script]).
2. Click [DOWNLOAD][download-link] (or visit the RAW file url).
3. go to the Tampermonkey extension and edit the script, edit the lines, and put your own projects:
    ```js
    var voteMap = {
        "AL C1.": "Spectrum Auction 2019", // example
    };
    ```
4. Go to the [WSIS ‏Voting page](https://www.itu.int/net4/wsis/stocktaking/Account/Login?ReturnUrl=/net4/wsis/stocktaking/Prizes/2021/Vote)
5. let the bot run things for you

If you haven't already, you need to register an account via the [registration URL](https://www.itu.int/net4/wsis/stocktaking/Account/Register?ReturnUrl=%2Fnet4%2Fwsis%2Fstocktaking%2FPrizes%2F2021%2FVote).

This script does NOT manage logins, it will run at the voting page. And when it voted for all the items, it will go to the "my votes" page.


[download-link]: https://github.com/FarisHijazi/wsis-voter/raw/master/vote.user.js
[guide:get-user-script]: https://openuserjs.org/about/Userscript-Beginners-HOWTO#how-do-i-get-going-
[guide:userscript]: https://simply-how.com/enhance-and-fine-tune-any-web-page-the-complete-user-scripts-guide#section-2
[guide:browser-API-beta]: https://www.tampermonkey.net/faq.php#Q302
[guide:browser-API-beta-gif]: https://www.tampermonkey.net/images/animated/gm_download.gif
[install:tampermonkey-chrome]: https://www.tampermonkey.net/index.php?ext=dhdg&browser=chrome
[install:tampermonkey-firefox]: https://www.tampermonkey.net/index.php?ext=dhdg&browser=firefox
[install:tampermonkey-edge]: https://www.tampermonkey.net/index.php?ext=dhdg&browser=edge

[chrome-icon]: https://imgur.com/3C4iKO0.png
[firefox-icon]: https://imgur.com/Dy442GK.png
[edge-icon]: https://imgur.com/RlmwPGO.png
[opera-icon]: https://imgur.com/nSJ9htU.png
[safari-icon]: https://imgur.com/ENbaWUu.png
[webbrowser-icon]: https://imgur.com/EuDp4vP.png
[brave-icon]: https://imgur.com/z8yjLZ2.png
[torr-icon]: https://imgur.com/uhb8M86.png
