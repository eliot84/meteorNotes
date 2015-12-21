// refactoring templates 
Session.set('secret', "hi");

Template.refactoring.helpers({
    'labelvar': function(){
        var code = password
        Session.set('secret', code);
    }
});

Template.child.helpers({
    'readingIt': function(tada){
        var numb = tada;

        numb = numb + 20;
        console.log(numb);
        Session.set('numb', numb);
    },

    'respons': function(){
        return Session.get('numb');
    }
});