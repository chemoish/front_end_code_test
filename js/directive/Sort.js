CharacterList.directive('sort', function () {
    return function (scope, element, attrs) {
        var $element = $(element);

        $element.on('click', function (event) {
            // remove sorting arrow from all other th elements
            $element.closest('th').siblings('th').find('a').removeClass('asc desc');

            if ($element.hasClass('asc') || $element.hasClass('desc')) {
                $element.toggleClass('asc desc');
            } else {
                $element.addClass('asc');
            }

            event.preventDefault();
        });
    };
});