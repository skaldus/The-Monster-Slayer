new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            var maxDamage = 10;
            var minDamage = 3;
            var damage = Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
            this.monsterHealth -= damage;

            if(this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }
            
            maxDamage = 12;
            minDamage = 5;
            var damage = Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
            this.playerHealth -= damage;

            if(this.playerHealth <= 0) {
                alert('You lost!');
                this.gameIsRunning = false;
            }
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        }
    }
});