export default function budget() {

    const $lists = $('.income__list');
    const listTemplate = $lists.html();

    function addList(list) {
        $lists.append(Mustache.render(listTemplate, list));
    }

    $.ajax({
        type: 'GET',
        url: '/income',
        success: function (lists) {
            $.each(lists, function (i, list) {
                addList(list)
            });
        }
    })
};