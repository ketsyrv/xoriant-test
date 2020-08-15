jQuery(document).ready(function($){
    $('.xrnt-btn').click(function(){
        $('.xrnt-moves').slideUp();
        var flag = true;
        /**
         * Check if any field is empty cause all the fields are important for us.
         */
        $('.xrnt-no-inp').each(function(){
            if ($(this).children().val() == '') {
                $(this).children().addClass('error');
                flag = false;
            } else {
                $(this).children().removeClass('error');
            }
        });

        //storing the values of coordinates and size in JS variables.
        var xPos  = parseInt($('.xrnt-x').val());
        var yPos  = parseInt($('.xrnt-y').val());
        var size = parseInt($('.xrnt-size').val());

        //validate if any coordinate is out of bounds
        if (xPos > size || yPos > size) {
            alert("X or Y coordinates should not be greater than given size");
            return false;
        }

        /**
         * There are always 8 possibilities for the Knight to move on the chessboard. So we will run the loop 8 times
         * and see if each move is possible for the given knight. 
         */
        var moves = new Array();
        var cnt = 1;
        while (cnt <= 8) {
            switch (cnt) {
                case 1 : 
                    var steps = checkPos1(xPos, yPos, size);
                    moves.push(steps);
                    break;
                case 2 : 
                    var steps = checkPos2(xPos, yPos, size);
                    moves.push(steps);
                    break;
                case 3 : 
                    var steps = checkPos3(xPos, yPos, size);
                    moves.push(steps);
                    break;
                case 4 : 
                    var steps = checkPos4(xPos, yPos, size);
                    moves.push(steps);
                    break;
                case 5 : 
                    var steps = checkPos5(xPos, yPos, size);
                    moves.push(steps);
                    break;
                case 6 : 
                    var steps = checkPos6(xPos, yPos, size);
                    moves.push(steps);
                    break;
                case 7 : 
                    var steps = checkPos7(xPos, yPos, size);
                    moves.push(steps);
                    break;
                case 8 : 
                    var steps = checkPos8(xPos, yPos, size);
                    moves.push(steps);
                    break;
            }
          cnt++;  
        }
        console.log(moves);  
        $('.xrnt-moves').slideDown();  
    });
});

/**
 * Checks if first move is possible i.e. 2 steps up and 1 step left.
 * 
 * @param {integer} xPos 
 * @param {integer} yPos 
 * @param {integer} size 
 * 
 * @return {string}
 */
function checkPos1(xPos, yPos, size) 
{
    if (yPos > (size -2) || xPos == 1) {
        return 'Can not go 2 steps up and 1 step to left.';
    }

    var steps = new Array();
    steps.push('X:'+xPos+' Y: '+ ++yPos);
    steps.push('X:'+xPos+' Y: '+ ++yPos);
    steps.push('X:'+--xPos+' Y: '+ yPos);
    return steps;
}

/**
 * Checks if second move is possible i.e. 2 steps up and 1 step right.
 * 
 * @param {integer} xPos 
 * @param {integer} yPos 
 * @param {integer} size 
 * 
 * @return {string}
 */
function checkPos2(xPos, yPos, size) 
{
    if (yPos > (size -2) || xPos == size) {
        return 'Can not go 2 steps up and 1 step right';
    }

    var steps = new Array();
    steps.push('X:'+xPos+' Y: '+ ++yPos);
    steps.push('X:'+xPos+' Y: '+ ++yPos);
    steps.push('X:'+ ++xPos+' Y: '+ yPos);
    return steps;
}

/**
 * Checks if second move is possible i.e. 2 steps below and 1 step left.
 * 
 * @param {integer} xPos 
 * @param {integer} yPos 
 * @param {integer} size 
 * 
 * @return {string}
 */
function checkPos3(xPos, yPos, size) 
{
    if (yPos < 3 || xPos == 1) {
        return 'Can not go 2 steps down and 1 step left';
    }

    var steps = new Array();
    steps.push('X:'+xPos+' Y: '+ --yPos);
    steps.push('X:'+xPos+' Y: '+ --yPos);
    steps.push('X:'+ --xPos+' Y: '+ yPos);
    return steps;
}

/**
 * Checks if second move is possible i.e. 2 steps below and 1 step right.
 * 
 * @param {integer} xPos 
 * @param {integer} yPos 
 * @param {integer} size 
 * 
 * @return {string}
 */
function checkPos4(xPos, yPos, size) 
{
    if (yPos < 3 || xPos == size) {
        return 'Can not go 2 steps down and 1 step right';
    }

    var steps = new Array();
    steps.push('X:'+xPos+' Y: '+ --yPos);
    steps.push('X:'+xPos+' Y: '+ --yPos);
    steps.push('X:'+ ++xPos+' Y: '+ yPos);
    return steps;
}

/**
 * Checks if second move is possible i.e. 2 steps left and 1 step up.
 * 
 * @param {integer} xPos 
 * @param {integer} yPos 
 * @param {integer} size 
 * 
 * @return {string}
 */
function checkPos5(xPos, yPos, size) 
{
    if (yPos == size || xPos < 3) {
        return 'Can not go 2 steps left and 1 step up';
    }

    var steps = new Array();
    steps.push('X:'+ --xPos+' Y: '+ yPos);
    steps.push('X:'+ --xPos+' Y: '+ yPos);
    steps.push('X:'+ xPos+' Y: '+ ++yPos);
    return steps;
}

/**
 * Checks if second move is possible i.e. 2 steps left and 1 step down.
 * 
 * @param {integer} xPos 
 * @param {integer} yPos 
 * @param {integer} size 
 * 
 * @return {string}
 */
function checkPos6(xPos, yPos, size) 
{
    if (yPos == 1 || xPos < 3) {
        return 'Can not go 2 steps left and 1 step down';
    }

    var steps = new Array();
    steps.push('X:'+ --xPos+' Y: '+ yPos);
    steps.push('X:'+ --xPos+' Y: '+ yPos);
    steps.push('X:'+ xPos+' Y: '+ --yPos);
    return steps;
}

/**
 * Checks if second move is possible i.e. 2 steps right and 1 step up.
 * 
 * @param {integer} xPos 
 * @param {integer} yPos 
 * @param {integer} size 
 * 
 * @return {string}
 */
function checkPos7(xPos, yPos, size) 
{
    if (yPos == size || xPos > (size -2) ) {
        return 'Can not go 2 steps right and 1 step up';
    }

    var steps = new Array();
    steps.push('X:'+ ++xPos+' Y: '+ yPos);
    steps.push('X:'+ ++xPos+' Y: '+ yPos);
    steps.push('X:'+ xPos+' Y: '+ ++yPos);
    return steps;
}

/**
 * Checks if second move is possible i.e. 2 steps right and 1 step down.
 * 
 * @param {integer} xPos 
 * @param {integer} yPos 
 * @param {integer} size 
 * 
 * @return {string}
 */
function checkPos8(xPos, yPos, size) 
{
    if (yPos == 1 || xPos > (size -2) ) {
        return 'Can not go 2 steps right and 1 step down';
    }

    var steps = new Array();
    steps.push('X:'+ ++xPos+' Y: '+ yPos);
    steps.push('X:'+ ++xPos+' Y: '+ yPos);
    steps.push('X:'+ xPos+' Y: '+ --yPos);
    return steps;
}