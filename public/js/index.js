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
                        resultsHtml += `<li class="dropdown-item"><a href="/character/?characterId=${character.id}">${character.name}</li>`;
                    });
                    $('#results').html(resultsHtml).show();
                },
                error: function() {
                    $('#results').html('<li class="dropdown-item text-danger">Error fetching results</li>').show();
                }
            });
        } else {
            $('#results').hide();
        }
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.search').length) {
            $('#results').hide();
        }
    });
});
