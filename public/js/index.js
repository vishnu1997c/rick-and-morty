$(document).ready(function() {
    $('.search').on('input', function() {
        const query = $(this).val();
        if (query.length > 2) {
            $.ajax({
                url: `/search?q=${query}`,
                method: 'GET',
                success: function(data) {
                    let resultsHtml = '';
                    data.forEach(function(character) {
                        resultsHtml += `<li class="dropdown-item">${character.name}</li>`;
                    });
                    $('#result').html(resultsHtml).show();
                },
                error: function() {
                    $('#result').html('<li class="dropdown-item text-danger">Error fetching results</li>').show();
                }
            });
        } else {
            $('#result').hide();
        }
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.search').length) {
            $('#result').hide();
        }
    });
});
