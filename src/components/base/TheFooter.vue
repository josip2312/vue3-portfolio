<template>
    <footer class="footer">
        <div class="footer-social">
            <a href="https://github.com/josip2312" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path
                        fill="var(--font-paragraph)"
                        d="M12 0a12 12 0 00-3.8 23.39c.6.1.8-.26.8-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.09-.72.09-.72 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.94 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.33 3.3 1.23a11.5 11.5 0 016 0c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17a4.63 4.63 0 011.24 3.22c0 4.61-2.81 5.63-5.48 5.92.43.38.82 1.1.82 2.23v3.29c0 .32.2.7.8.58A12 12 0 0012 0z"
                    />
                </svg>
            </a>
            <a
                href="https://www.linkedin.com/in/josip-ivancic-b3521a1b4/"
                target="_blank"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path
                        fill="var(--font-paragraph)"
                        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.98 0H8.01v16h4.97v-8.4c0-4.67 6.03-5.05 6.03 0V24H24V13.87c0-7.88-8.92-7.6-11.02-3.71V8z"
                    />
                </svg>
            </a>
        </div>
        <p class="footer-copyright">
            Developed and designed by Josip Ivancic &copy;
        </p>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 25vh;
    padding: 2.5rem 0;
    background-color: var(--neutral-500);
    @include mq-max($v-6) {
        padding-bottom: 10vh;
    }
}
.footer-social {
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 50%;
    max-width: 30rem;
    img {
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
    }
}
.footer-copyright {
    display: flex;
    align-items: center;
    flex: 1;
}
</style>
