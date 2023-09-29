const tableScroll = document.querySelector('.table-scroll');

    tableScroll.addEventListener('scroll', function () {
        const translate = `translate(0, ${this.scrollTop}px)`;
        this.querySelector('thead').style.transform = translate;
    });