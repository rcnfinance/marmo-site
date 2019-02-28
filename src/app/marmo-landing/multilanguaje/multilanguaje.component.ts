import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multilanguaje',
  templateUrl: './multilanguaje.component.html',
  styleUrls: ['./multilanguaje.component.scss']
})

export class MultilanguajeComponent implements OnInit {

  isJava: boolean = false;
  isJavascript: boolean = false;
  isPython: boolean = true;
  statusJava: boolean = false;
  statusJavascript: boolean = false;
  statusPython: boolean = true;

  java = 'import network.marmoj.model.Wallet;\nimport network.marmoj.builder.IntentBuilder;\nimport network.marmoj.model.data.ERC20;\n\nWallet wallet = new Wallet("<private key here>");\nSystem.out.println(wallet.getAddress()); // The address of the Marmo wallet\n\n// Test ERC20 token contract\nERC20 token = new ERC20("0x6B0F919A5d450Fa5e6283Ff6178dC1FCd195FD2A");\n\n// Transfer 1 Token (RCN has 18 decimals)\nIntentAction intentAction = token.transfer(\n\tnew Address("0x7F5EB5bB5cF88cfcEe9613368636f458800e62CB"),\n\tnew Uint256(BigInteger.TEN.pow(18))\n);\n\n// Create intent from intent action\nIntent intent = IntentBuilder.anIntent()\n\t.withIntentAction(intentAction)\n\t.build();\n\nSignedIntent signedIntent = SignedIntentBuilder.aSignedIntent()\n\t.withIntent(intent)\n\t.withWallet(wallet)\n\t.build();\n\nsignedIntent.relay()';
  javascript ='import { Wallet } from "marmojs";\nimport { IntentBuilder, Intent, ERC20, BigNumber } from "marmojs";\n\nconst wallet = new Wallet("<private key here>");\nconsole.log(wallet.address); // The address of the Marmo wallet\n\n// Test ERC20 token contract\nconst token = new ERC2O("0x2f45b6fb2f28a73f110400386da31044b2e953d4");\n\n// Transfer 1 Token (RCN has 18 decimals)\nconst value = new BigNumber(10).pow(new BigNumber(18));\n\n// Create Intent action\nconst intentAction = token.transfer("0x7F5EB5bB5cF88cfcEe9613368636f458800e62CB", value);\n\n// Create Intent\nconst intent = new IntentBuilder()\n\t.withIntentAction(intentAction)\n\t.build();\n\nsignedIntent = wallet.sign(intent);\n\nsignedIntent.relay();';
  python ='from marmopy import Wallet\nfrom marmopy import Intent, ERC20\n\nwallet = Wallet("<private key here>")\nwallet.address # The address of the Marmo wallet\n\n# Test ERC20 token contract\ntoken = ERC20("0x2f45b6fb2f28a73f110400386da31044b2e953d4")\n\n# Transfer 1 Token (RCN has 18 decimals)\nintent_action = token.transfer("0x7F5EB5bB5cF88cfcEe9613368636f458800e62CB", 10 ** 18)\n\n# Create intent from intent action\nintent = Intent(intent_action = intent_action)\n\nsigned_intent = wallet.sign(intent)\n\nsigned_intent.relay()';
  constructor() { }

  toggleJava(){
    this.isJava = true
    this.isJavascript = false
    this.isPython = false
    this.statusJava = true
    this.statusJavascript = false
    this.statusPython = false
  }

  toggleJavascript(){
    this.isJava = false
    this.isJavascript = true
    this.isPython = false
    this.statusJava = false
    this.statusJavascript = true
    this.statusPython = false
  }

  togglePython(){
    this.isJava = false
    this.isJavascript = false
    this.isPython = true
    this.statusJava = false
    this.statusJavascript = false
    this.statusPython = true
  }


  ngOnInit() {
  }

}
