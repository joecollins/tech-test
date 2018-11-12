import $ from 'jquery';

$('.js-basket-desktop-trigger').click(function () {
    $(this).next().toggleClass('basket-summary__breakdown-content--visible');
});