$(document).ready(() => {
	
    $('#documentacao').on('click', () =>{
        //$('#pagina').load('documentacao.html')
        $.get('documentacao.html', data => {
            $('#pagina').html(data)
        })
    })

    $('#suporte').on('click', () => {
        //$('#pagina').load('suporte.html')
        $.get('suporte.html', data => {
            $('#pagina').html(data)
        })
        
    })
    $('#competencia').on('change', e =>{
        let competencia = $(e.target).val()

        $.ajax({
            type: 'GET', 
            url: 'app.php',
            data: `competencia=${competencia}`, //x-www-form-urlencoded
            //datatype:'json',
            success: dados => {
                $('#numeroVendas').html(dados.numeroVendas)
                $('#totalVendas').html(dados.totalVendas)
                console.log(dados.numeroVendas)
                //console.log(dados.numeroVendas, dados.totalVendas)
            },
            error: erro =>{console.log(erro)}
        })
        // metodo, url, dados, sucesso, erro
    })
})