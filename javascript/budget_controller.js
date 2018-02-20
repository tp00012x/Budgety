import $ from 'jquery';
import Mustache from 'mustache';

const $lists = $('.income__list');
const listTemplate = $lists.html();

function addList(list) {
    $lists.append(Mustache.render(listTemplate, list));
}

$.ajax({
    type: 'GET',
    url: '/data',
    success: function (lists) {
        $.each(lists['income'], function (i, list) {
            addList(list);
        });
    }
});
