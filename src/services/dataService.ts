import { AdvocateModel, PracticeAreaModel, NavItemModel, StatModel, AwardModel } from "@/models/domain";

export class LandingPageDataService {
  public static getNavigationItems(): NavItemModel[] {
    return [
      new NavItemModel("Home", "#", true),
      new NavItemModel("About", "#about"),
      new NavItemModel("Practice Areas", "#practice-areas"),
      new NavItemModel("Advocates", "#advocates"),
      new NavItemModel("Sectors", "#sectors"),
      new NavItemModel("Contact", "#contact"),
    ];
  }

  public static getAwards(): AwardModel[] {
    return [
      new AwardModel("award-1", 3, "Best Law Firm", "2022"),
      new AwardModel("award-2", 3, "Client Choice", "Award"),
    ];
  }

  public static getStatistics(): StatModel[] {
    return [
      new StatModel("stat-1", "30+", "Years Combined Expertise"),
      new StatModel("stat-2", "12K+", "Matters Represented"),
      new StatModel("stat-3", "95%", "Client Approval", true),
      new StatModel("stat-4", "13+", "Sectors Advised"),
    ];
  }

  public static getAdvocates(): AdvocateModel[] {
    return [
      new AdvocateModel(
        "prem-kandpal",
        "Prem Kandpal",
        "Advocate | Lead Counsel",
        "LLB, LL.M. (NLUJ)",
        "Prem is an accomplished legal professional with over a decade of experience specializing in taxation, corporate, and regulatory laws. A law graduate from Delhi University and an LL.M. holder from National Law University, Jodhpur—where he specialized in tax and corporate laws—Prem brings a robust blend of academic excellence and hands-on litigation expertise to his practice. Prem offers strategic legal counsel, litigation, and advisory services in complex matters relating to GST, Customs, Excise, VAT, Service Tax, Income Tax, Foreign Trade Policy, and economic offences.",
        ["GST & Indirect Tax", "Customs & Foreign Trade", "White-Collar Crime Defense", "Arbitration & Litigation"],
        "10+ Years",
        ["Samsung", "Philip Morris", "Carlsberg", "Pernod Ricard", "AB InBev", "Posco India", "DDCA", "B.L. Agro", "A2Z Infra", "Shri Lal Mahal Group"],
        true
      ),
      new AdvocateModel(
        "amrendra-singh",
        "Amrendra Singh",
        "Advocate",
        "BA LLB",
        "Amrendra Singh is a qualified lawyer and a law graduate with significant experience in litigation and advisory services, particularly in the areas of Goods and Services Tax (GST), Customs, Foreign Trade Policy, and Commercial Laws. He regularly represents clients before various High Courts, Tribunals, and District Courts.",
        ["GST Practice", "Customs & FTP", "Commercial Litigation", "Regulatory Advisory"]
      ),
      new AdvocateModel(
        "pramod-kandpal",
        "Pramod Kandpal",
        "Advocate",
        "LLB, CA (IPCC), M. Com",
        "Pramod Kandpal is a seasoned legal professional practicing in Delhi, holding an LLB from Delhi University, M.Com from Khalsa College, and CA (IPCC) qualification from ICAI. With a robust foundation in both law and commerce, Pramod provides comprehensive advisory and litigation services in Income Tax, GST, corporate law, and regulatory compliance.",
        ["Direct Tax & Income Tax", "GST Adjudication", "Corporate Law", "Financial Regulatory"]
      ),
      new AdvocateModel(
        "ketan-jain",
        "Ketan Jain",
        "Advocate",
        "LL.B.",
        "Ketan Jain is an experienced advocate with over six years of dedicated practice in litigation and legal advisory services, focusing on indirect tax laws and regulatory matters. He has played a pivotal role in preparing policy representations before the Central Board of Indirect Taxes and Customs (CBIC).",
        ["Indirect Tax Litigation", "CBIC Policy Submissions", "Service Tax & Excise", "Writ Petitions"],
        "6+ Years",
        ["Carlsberg", "Gawar Construction", "Pernod Ricard", "A2Z Infra", "ITI Limited"]
      ),
      new AdvocateModel(
        "nakul-sehgal",
        "Nakul Sehgal",
        "Advocate",
        "LLB, LLM",
        "Nakul Sehgal is a law graduate from Delhi University and holds an LLM from Kurukshetra University. With over 6 years of experience in litigation and advisory work, he serves as panel counsel for NBCC (India) Ltd. and specializes in arbitration, commercial disputes, insolvency, banking, and PMLA matters.",
        ["Arbitration & PMLA", "Bail & Criminal Practice", "Corporate Disputes", "Panel Counsel NBCC"],
        "6+ Years"
      ),
      new AdvocateModel(
        "rohit-gupta",
        "Rohit Gupta",
        "Advocate-on-Record (AOR)",
        "Faculty of Law, DU",
        "Rohit Gupta is an Advocate-on-Record with over 8 years of experience specializing in commercial and property law, family disputes, and succession matters. He regularly appears before the Hon’ble Supreme Court of India and High Courts.",
        ["Supreme Court AOR Practice", "Commercial & Property Law", "Succession & Family Law"],
        "8+ Years"
      ),
      new AdvocateModel(
        "himanshu-gupta",
        "Himanshu Gupta",
        "Advocate",
        "LL.B.",
        "Associate Advocate focusing on courtroom litigation, civil disputes, and advisory.",
        ["Dispute Resolution", "Civil Litigation"]
      ),
      new AdvocateModel(
        "ankur-saini",
        "Ankur Saini",
        "Advocate",
        "LL.B.",
        "Associate Advocate representing corporate clients in tax and commercial disputes.",
        ["Taxation Disputes", "Regulatory Compliances"]
      ),
      new AdvocateModel(
        "atharv-prabhakar",
        "Atharv Prabhakar",
        "Advocate",
        "LL.B.",
        "Associate Advocate assisting in arbitration, writs, and regulatory proceedings.",
        ["Arbitration", "Courtroom Advocacy"]
      ),
    ];
  }

  public static getPracticeAreas(): PracticeAreaModel[] {
    return [
      new PracticeAreaModel(
        "indirect-tax",
        "indirect-tax",
        "Indirect Tax (GST, Customs, SEZ)",
        "GST, Customs, SEZ & Foreign Trade Policy, Service Tax & Excise",
        "Comprehensive advisory, litigation, and defense in GST, Customs, SEZ, Anti-Dumping, and legacy tax matters.",
        {
          intro: "Aprajita Legal has developed a specialized and robust Indirect Tax practice catering to complex requirements under India's GST, Customs, SEZ, and legacy tax frameworks.",
          services: [
            {
              category: "Goods & Services Tax (GST)",
              items: [
                "Interpretation and analysis of GST law, rules, and notifications",
                "Input Tax Credit, cross-border supply chains, e-invoicing, and RCM advisory",
                "Drafting replies to SCNs, audit objections, and departmental summons",
                "Representation before GSTAT, High Courts, and Supreme Court",
                "Strategic defense in DGGI investigations, tax raids, and arrest proceedings under Sec 132",
                "Refund claims (export of goods/services, inverted duty structure) and TRAN-1/TRAN-2 credit litigation"
              ]
            },
            {
              category: "Customs, SEZ & Foreign Trade Policy (FTP)",
              items: [
                "Classification of goods, valuation, concessional duty rules (IGCR 2017)",
                "Structuring SEZ/EOU units, duty benefits, and Development Commissioner representations",
                "Foreign Trade Policy schemes (Advance Auth, EPCG, RoDTEP, DGFT approvals)",
                "Litigation before CESTAT, High Courts, and DRI / Customs Preventive defense"
              ]
            },
            {
              category: "Legacy Indirect Tax (Service Tax, Excise & VAT)",
              items: [
                "Managing open assessments, audit memos, and legacy CENVAT credit transitions",
                "Litigation before CESTAT, State VAT Tribunals, and Supreme Court",
                "Defense during DGCEI and State VAT enforcement investigations"
              ]
            }
          ]
        }
      ),
      new PracticeAreaModel(
        "direct-tax",
        "direct-tax",
        "Direct Tax & International Taxation",
        "Income Tax, International Taxation, Transfer Pricing",
        "Strategic direct tax planning, treaty interpretation, transfer pricing audits, and defense in tax prosecutions.",
        {
          intro: "We offer comprehensive legal solutions in Income Tax and International Taxation for corporations, High Net Worth Individuals, and multinational enterprises.",
          services: [
            {
              category: "Direct Tax Advisory & International Tax",
              items: [
                "Tax planning, TDS/TCS, tax residency, and POEM evaluation",
                "Cross-border structuring, DTAA treaty interpretation, PE risk assessment",
                "Repatriation strategies (royalties, dividends) and Equalisation Levy / SEP"
              ]
            },
            {
              category: "Transfer Pricing & Litigation",
              items: [
                "Intra-group transaction structuring and transfer pricing documentation",
                "APA / MAP support and representation in TP audits",
                "Appeals before Assessing Officers, CIT(A), ITAT, High Courts, and Supreme Court",
                "Defense in Income Tax criminal prosecutions, tax evasion, and search & seizure"
              ]
            }
          ]
        }
      ),
      new PracticeAreaModel(
        "white-collar",
        "white-collar",
        "White-Collar Crimes & Economic Offences",
        "PMLA, Benami Act, Black Money Act, Tax Prosecutions",
        "Specialized legal defense in economic offence trials, financial investigations, and regulatory enforcement.",
        {
          intro: "Aprajita Legal provides specialized defense for individuals and corporate entities facing investigation under PMLA, Benami, Black Money Act, and criminal tax provisions.",
          services: [
            {
              category: "Economic Offences & Financial Crime Defense",
              items: [
                "Prevention of Money Laundering Act (PMLA) defense before ED, Adjudicating Authorities, and Special Courts",
                "Bail, anticipatory bail, and challenging asset attachments under Section 5 PMLA",
                "Benami Transactions (Prohibition) Act representation and property attachment defense",
                "Black Money Act undisclosed offshore asset defense and Special Court appeals",
                "Criminal trial defense in GST Sec 132, Customs Act, and Income Tax prosecution"
              ]
            }
          ]
        }
      ),
      new PracticeAreaModel(
        "commercial-disputes",
        "commercial-disputes",
        "Commercial, Corporate & Civil Disputes",
        "NCLT/NCLAT, Shareholder Disputes, Real Estate & RERA",
        "End-to-end legal advocacy in contractual breaches, corporate insolvency, shareholder suits, and civil writs.",
        {
          intro: "Our litigation team delivers precise courtroom advocacy and pre-litigation strategy across all judicial and quasi-judicial forums in India.",
          services: [
            {
              category: "Corporate & Commercial Litigation",
              items: [
                "Breach of contract, supply chain disputes, recovery suits, and injunctions",
                "Shareholder & Boardroom disputes, oppression & mismanagement petitions before NCLT/NCLAT",
                "Director liability, fiduciary misconduct, and joint venture litigation",
                "Civil suits, property partition, civil writs, and RERA homebuyer/developer litigation"
              ]
            }
          ]
        }
      ),
      new PracticeAreaModel(
        "arbitration",
        "arbitration",
        "Arbitration & Conciliation (ADR)",
        "Domestic & International Commercial Arbitration (SIAC, ICC, LCIA, DIAC)",
        "Dedicated ADR practice handling high-stakes commercial disputes and award enforcement.",
        {
          intro: "We represent clients in domestic and international arbitrations under Indian law and institutional rules like SIAC, ICC, LCIA, and UNCITRAL.",
          services: [
            {
              category: "Arbitration & Court Proceedings",
              items: [
                "Ad-hoc & Institutional arbitration in infrastructure, real estate, energy, and corporate JVs",
                "Sec 11 appointment of arbitrators & Sec 9 interim court injunctions",
                "Challenge to arbitral awards under Sec 34 and enforcement/execution under Sec 36 & 48",
                "Representation before DIAC, ICADR, and foreign seated arbitral tribunals"
              ]
            }
          ]
        }
      ),
      new PracticeAreaModel(
        "banking-ibc",
        "banking-ibc",
        "Banking, Insolvency & Competition Law",
        "NCLT/IBC Proceedings, DRT & SARFAESI, CCI Anti-Trust",
        "Financial recovery, corporate restructuring, SARFAESI enforcement, and antitrust market regulation.",
        {
          intro: "Strategic counsel for banks, financial institutions, resolution professionals, and corporate debtors in insolvency and regulatory compliance.",
          services: [
            {
              category: "Insolvency, DRT & Competition",
              items: [
                "DRT & SARFAESI Act Original Applications (OA) and Securitization Applications (SA)",
                "CIRP initiation under Section 7, 9, 10 IBC before NCLT/NCLAT",
                "Resolution plan vetting, avoidance transactions, and liquidation proceedings",
                "CCI Anti-trust investigations, Abuse of Dominance, and merger notifications before NCLAT"
              ]
            }
          ]
        }
      ),
    ];
  }

  public static getSectors(): string[] {
    return [
      "Manufacturing",
      "E-commerce & Global Logistics",
      "Steel & Metals",
      "Chemicals & Petrochemicals",
      "Real Estate & Infrastructure",
      "FMCG & Retail",
      "Financial Services & Banking",
      "Pharmaceuticals",
      "IT & Software",
      "Automotive & Auto Components",
      "Electronics & Engineering Goods",
      "Energy & Power",
      "Apparel & Textiles",
    ];
  }
}

export class JsonLdService {
  public static getLegalServiceSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Aprajita Legal",
      "description": "Boutique law firm based in New Delhi specializing in Indirect Tax (GST, Customs), Direct Tax, White-Collar Crimes, Arbitration, Commercial Disputes, and Corporate Law.",
      "url": "https://aprajitalegal.com",
      "telephone": "+91-8585988102",
      "email": "pclegaladvisor@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "B-28, LGF, B-Block, Lajpat Nagar-III",
        "addressLocality": "New Delhi",
        "postalCode": "110024",
        "addressCountry": "IN"
      },
      "knowsAbout": [
        "GST Law", "Customs Law", "Income Tax", "White-Collar Crimes", "PMLA Defense", "Arbitration", "NCLT Litigation", "Foreign Trade Policy"
      ],
      "founders": [
        { "@type": "Person", "name": "Prem Kandpal" }
      ]
    };
  }
}
