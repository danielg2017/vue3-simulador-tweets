import { stringify, v4 as uuidv4 } from 'uuid';
import { TWEETS } from '../utils/constants';

export function saveTweetApi(tweet, username) {
    const newTweet = getTweetsApi();

    if(tweet.length === 0) {
    const tweetTemp = [
        {
        id: uuidv4(),
        tweet,
        username,
        createdAt: new Date(),
    }
];
    localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));

} else {
    newTweet.push({
        id: uuidv4(),
        tweet,
        username,
        createdAt: new Date(),
    });
    localStorage.setItem(TWEETS, JSON.stringify(newTweet));
}
}

export function getTweetsApi() {
    const tweets = localStorage.getItem(TWEETS);
    if(tweets) {
    return JSON.parse(tweets);
}
    return [];
}
