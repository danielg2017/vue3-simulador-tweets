<!-- @format -->

<template>
    <div class="container">
        <h1 class="text-center mb-4">Lista de Tweets</h1>
        <p class="no__tweets" v-if="tweets.length === 0">No hay Tweets</p>
        <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
            <p class="tweet__title">{{ tweet.username }}</p>
            <p class="tweet__text">{{ tweet.tweet }}</p>
            <span>{{ formatDate(tweet.createdAt) }}</span>
            <Close @click="deleteTweet(tweet.id)" />
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/es';
import { Close } from './Icons/Index';
import { deleteTweetApi } from '../api/tweet';

export default {
    props: {
        tweets: Array,
        reloadTweets: Function,
    },

    components: {
        Close,
    },

    setup(props) {
        const formatDate = (date) => {
            return moment(date).format('DD/MM/YYYY HH:mm');
            // .format('DD/MM/YYYY HH:mm:ss'); // formato de la fecha
            // .fromNow(); // para mostrar la fecha en formato "hace x tiempo"
        };

        const deleteTweet = (idTweet) => {
            deleteTweetApi(idTweet);
            props.reloadTweets();
        };

        return {
            formatDate,
            deleteTweet,
        };
    },
};
</script>

<style lang="scss">
.tweet {
    position: relative;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin: 0;
    }

    &__title {
        position: absolute;
        top: -12px;
        left: 10px;
        background-color: #fff;
        padding: 0 10px;
        font-weight: bold;
    }

    &__text {
        color: gray;
    }

    span {
        position: absolute;
        right: 10px;
        bottom: -12px;
        font-size: 12px;
        color: gray;
        background-color: #fff;
        padding: 0 20px;
        border: 1px solid #ccc;
    }

    svg {
        width: 20px;
        height: 20px;

        &:hover {
            cursor: pointer;
            color: #f00;
        }
    }

    .no__tweets {
        // position: absolute;
        // border: 1px solid #ccc;
        // padding: 20px;
        // margin-bottom: 20px;
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        color: #f00;
    }
}
</style>
