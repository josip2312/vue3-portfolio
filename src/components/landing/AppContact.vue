<template>
    <div class="container">
        <div class="contact-info" data-aos="fade-up">
            <div class="contact-info-top">
                <h3 class="heading-3">Get in touch</h3>
                <div class="message">Send me a message!</div>
            </div>

            <div class="contact-info-bottom">
                <div class="phone">
                    <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                        ></path>
                    </svg>
                    <span> 00387-63-073-747 </span>
                </div>
                <div class="email">
                    <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        ></path>
                        <path
                            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        ></path>
                    </svg>
                    <span> josip.ivancic23@gmail.com </span>
                </div>
            </div>
        </div>

        <form
            data-aos="fade-up"
            class="contact-form"
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
        >
            <div class="form-top">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input
                        v-model="form.name"
                        name="name"
                        id="name"
                        type="text"
                        required
                        autocomplete="on"
                    />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                        v-model="form.email"
                        name="email"
                        id="email"
                        type="email"
                        required
                        autocomplete="on"
                    />
                </div>
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea
                    v-model="form.message"
                    name="message"
                    id="message"
                    cols="10"
                    rows="6"
                    required
                    minlength="10"
                    maxlength="200"
                ></textarea>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-main">
                    <span>Send</span>
                    <img src="@/assets/icons/send.svg" alt="" />
                </button>
            </div>
        </form>
    </div>
    <Loader :isLoading="isLoading" />
    <FormModal
        :isModalVisible="isModalVisible"
        :modalContent="modalContent"
        @hide-modal="hideModal"
    />
</template>

<script>
import FormModal from '@/components/main/FormModal';
import Loader from '@/components/main/Loader';

import { reactive, ref } from 'vue';
import axios from 'axios';
export default {
    name: 'AppContact',
    components: {
        FormModal,
        Loader,
    },

    setup() {
        const form = reactive({
            name: '',
            email: '',
            message: '',
        });
        const modalContent = reactive({
            title: 'asdasd',
            message: 'asdasdad',
        });
        const isLoading = ref(false);
        const isModalVisible = ref(false);
        const hideModal = () => {
            isModalVisible.value = false;
        };

        const encode = (data) => {
            return Object.keys(data)
                .map(
                    (key) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            data[key],
                        )}`,
                )
                .join('&');
        };

        const handleSubmit = async () => {
            const axiosConfig = {
                header: { 'Content-Type': 'application/x-www-form-urlencoded' },
            };
            try {
                isLoading.value = true;
                await axios.post(
                    '/',
                    encode({
                        'form-name': 'contact-form',
                        ...form,
                    }),
                    axiosConfig,
                );
                isLoading.value = false;
                modalContent.title = 'Success';
                modalContent.message =
                    'The message has been sent successfully. Thank you for contacting me.';
                isModalVisible.value = true;
            } catch (error) {
                isLoading.value = false;
                modalContent.title = 'Whoops!';
                modalContent.message =
                    'Something went wrong! Please try sending the message again.';
                isModalVisible.value = true;
                console.error(error);
            }
        };

        return {
            form,
            encode,
            handleSubmit,
            isLoading,
            isModalVisible,
            hideModal,
            modalContent,
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    @include mq-min($v-10) {
        flex-direction: row;
    }
}

.contact-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;

    @include mq-min($v-6) {
        flex-direction: row;
    }
    @include mq-min($v-10) {
        flex-direction: column;
    }

    .heading-3 {
        margin-bottom: var(--s-14);
    }
    .message {
        font-size: var(--s-18);
        color: var(--font-paragraph);
    }
    &-top {
        flex: 1;
        margin-bottom: var(--s-20);
        @include mq-min($v-6) {
        }
    }
    &-bottom {
        color: var(--font-paragraph);
    }

    .phone,
    .email {
        display: flex;
        align-items: center;
        font-weight: 500;

        svg {
            width: 3rem;
            margin-right: 1.5rem;
        }
    }
    .phone {
        margin-bottom: var(--s-20);
    }
}

.contact-form {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

    .form-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .form-group {
            width: 45%;
        }
    }
    .form-group {
        width: 100%;
        display: flex;
        flex-direction: column;

        label {
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--font-paragraph);

            margin-bottom: var(--s-10);
        }
        input,
        textarea {
            color: var(--font-paragraph);

            border: 0;
            border-radius: var(--br-sm);
            padding: 1rem 1.5rem;
            width: 100%;
            background-color: var(--neutral-700);
            margin-bottom: var(--s-20);
            box-shadow: 0 2px 0 hsla(0, 0%, 50%, 0.15),
                inset 0 2px 2px hsla(0, 0, 0, 0.15);
        }

        input:focus,
        textarea:focus {
            outline: 1px solid var(--accent);
        }
    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        @include mq-min($v-6) {
            max-width: 20rem;
        }
        img {
            width: 2rem;
            height: 2rem;
            margin-left: 1rem;
        }
    }
}
.light-mode {
    input,
    textarea {
        box-shadow: 0 2px 0 hsla(0, 0%, 100%, 0.15),
            inset 0 1px 2px hsla(0, 0, 0, 0.15) !important;
    }
}
</style>
