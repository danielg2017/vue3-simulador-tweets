<template>
    <div class="tweet-form container" :class="{ open: showForm }">
        <form @submit.prevent="sendTweet">
            <input
                class="form-control"
                placeholder="Tu nombre"
                v-model="username"
            />
            <textarea
                class="form-control"
                rows="3"
                placeholder="Escribe tu tweet"
                v-model="tweet"
            ></textarea>
            <button type="submit" class="btn btn-primary">enviar Tweet</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { saveTweetApi } from '../api/tweet';
export default {
    props: {
        showForm: Boolean,
    },
    setup(prpops) {
        let username = ref('');
        let tweet = ref('');

        const sendTweet = () => {
            saveTweetApi(tweet.value, username.value);
        };
        return { sendTweet, username, tweet };
    },
};
</script>

<style lang="scss" scoped>
.tweet-form {
    margin-top: 20px;
    height: 0;
    overflow: hidden;

    &.open {
        height: auto;
    }

    form {
        margin-bottom: 5opx;

        input {
            margin-bottom: 10px;
        }
        button {
            width: 100%;
            margin-top: 10px;
        }
    }
}
</style>
