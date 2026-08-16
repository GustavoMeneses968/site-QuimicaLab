// =====================================================
// QuimicaLab — Arquivo JavaScript Completo
// =====================================================

// === LÓGICA DE NAVEGAÇÃO ENTRE TELAS ===
document.getElementById("iniciar").onclick = function () {
    document.getElementById("telaInicial").style.display = "none";
    document.getElementById("Opcoes").style.display = "block";
};

document.getElementById("tabelaPeriodica").onclick = function () {
    document.getElementById("Opcoes").style.display = "none";
    document.getElementById("tabelaPeriodicaDiv").style.display = "block";
    criarElementos();
};
document.getElementById("resumos").onclick = function () {
    document.getElementById("Opcoes").style.display = "none";
    document.getElementById("resumosDiv").style.display = "block";
};

document.getElementById("pagEspecial").onclick = function () {
    document.getElementById("Opcoes").style.display = "none";
    document.getElementById("pagEspecialDiv").style.display = "block";
};

document.getElementById("voltarTabela").onclick = function () {
    document.getElementById("tabelaPeriodicaDiv").style.display = "none";
    document.getElementById("Opcoes").style.display = "block";
};

document.getElementById("voltarResumo").onclick = function () {
    document.getElementById("resumosDiv").style.display = "none";
    document.getElementById("Opcoes").style.display = "block";
};

document.getElementById("voltarPag").onclick = function () {
    document.getElementById("pagEspecialDiv").style.display = "none";
    document.getElementById("Opcoes").style.display = "block";
};

// === BOTÕES DO BALANCEADOR ===
document.getElementById("balanceador").onclick = function () {
    document.getElementById("Opcoes").style.display = "none";
    document.getElementById("balanceadorDiv").style.display = "block";
};

document.getElementById("voltarBalancear").onclick = function () {
    document.getElementById("balanceadorDiv").style.display = "none";
    document.getElementById("Opcoes").style.display = "block";
};
document.getElementById("ia").onclick = function(){
    document.getElementById("Opcoes").style.display = "none";
    document.getElementById("iaDiv").style.display = "block";
};

document.getElementById("voltarIa").onclick = function(){
    document.getElementById("iaDiv").style.display = "none";
    document.getElementById("Opcoes").style.display = "block";
};
const elementos = [
    // Período 1
    { numero: 1, simbolo: "H", nome: "Hidrogênio", massa: "1,008", familia: "Não-Metais", grupo: "1", periodo: "1", classificacao: "Não-metal", confEletronica: "1s¹", estadoFisico: "Gasoso", nox: "+1, -1" },
    { numero: 2, simbolo: "He", nome: "Hélio", massa: "4,003", familia: "Gases Nobres", grupo: "18", periodo: "1", classificacao: "Gás Nobre", confEletronica: "[He]", estadoFisico: "Gasoso", nox: "0" },

    // Período 2
    { numero: 3, simbolo: "Li", nome: "Lítio", massa: "6,941", familia: "Metais Alcalinos", grupo: "1", periodo: "2", classificacao: "Metal", confEletronica: "[He] 2s¹", estadoFisico: "Sólido", nox: "+1" },
    { numero: 4, simbolo: "Be", nome: "Berílio", massa: "9,012", familia: "Metais Alcalino-Terrosos", grupo: "2", periodo: "2", classificacao: "Metal", confEletronica: "[He] 2s²", estadoFisico: "Sólido", nox: "+2" },
    { numero: 5, simbolo: "B", nome: "Boro", massa: "10,81", familia: "Metalóides", grupo: "13", periodo: "2", classificacao: "Metalóide", confEletronica: "[He] 2s² 2p¹", estadoFisico: "Sólido", nox: "+3" },
    { numero: 6, simbolo: "C", nome: "Carbono", massa: "12,011", familia: "Não-Metais", grupo: "14", periodo: "2", classificacao: "Não-metal", confEletronica: "[He] 2s² 2p²", estadoFisico: "Sólido", nox: "+4, +2, 0, -2, -4" },
    { numero: 7, simbolo: "N", nome: "Nitrogênio", massa: "14,007", familia: "Não-Metais", grupo: "15", periodo: "2", classificacao: "Não-metal", confEletronica: "[He] 2s² 2p³", estadoFisico: "Gasoso", nox: "+5, +4, +3, +2, +1, 0, -1, -3" },
    { numero: 8, simbolo: "O", nome: "Oxigênio", massa: "15,999", familia: "Calcogênios", grupo: "16", periodo: "2", classificacao: "Não-metal", confEletronica: "[He] 2s² 2p⁴", estadoFisico: "Gasoso", nox: "-2, -1, 0, +2" },
    { numero: 9, simbolo: "F", nome: "Flúor", massa: "18,998", familia: "Halogênios", grupo: "17", periodo: "2", classificacao: "Não-metal", confEletronica: "[He] 2s² 2p⁵", estadoFisico: "Gasoso", nox: "-1" },
    { numero: 10, simbolo: "Ne", nome: "Neônio", massa: "20,180", familia: "Gases Nobres", grupo: "18", periodo: "2", classificacao: "Gás Nobre", confEletronica: "[He] 2s² 2p⁶", estadoFisico: "Gasoso", nox: "0" },

    // Período 3
    { numero: 11, simbolo: "Na", nome: "Sódio", massa: "22,990", familia: "Metais Alcalinos", grupo: "1", periodo: "3", classificacao: "Metal", confEletronica: "[Ne] 3s¹", estadoFisico: "Sólido", nox: "+1" },
    { numero: 12, simbolo: "Mg", nome: "Magnésio", massa: "24,305", familia: "Metais Alcalino-Terrosos", grupo: "2", periodo: "3", classificacao: "Metal", confEletronica: "[Ne] 3s²", estadoFisico: "Sólido", nox: "+2" },
    { numero: 13, simbolo: "Al", nome: "Alumínio", massa: "26,982", familia: "Metais Pós-Transição", grupo: "13", periodo: "3", classificacao: "Metal", confEletronica: "[Ne] 3s² 3p¹", estadoFisico: "Sólido", nox: "+3" },
    { numero: 14, simbolo: "Si", nome: "Silício", massa: "28,086", familia: "Metalóides", grupo: "14", periodo: "3", classificacao: "Metalóide", confEletronica: "[Ne] 3s² 3p²", estadoFisico: "Sólido", nox: "+4, 0, -4" },
    { numero: 15, simbolo: "P", nome: "Fósforo", massa: "30,974", familia: "Não-Metais", grupo: "15", periodo: "3", classificacao: "Não-metal", confEletronica: "[Ne] 3s² 3p³", estadoFisico: "Sólido", nox: "+5, +3, 0, -3" },
    { numero: 16, simbolo: "S", nome: "Enxofre", massa: "32,065", familia: "Calcogênios", grupo: "16", periodo: "3", classificacao: "Não-metal", confEletronica: "[Ne] 3s² 3p⁴", estadoFisico: "Sólido", nox: "+6, +4, +2, 0, -2" },
    { numero: 17, simbolo: "Cl", nome: "Cloro", massa: "35,453", familia: "Halogênios", grupo: "17", periodo: "3", classificacao: "Não-metal", confEletronica: "[Ne] 3s² 3p⁵", estadoFisico: "Gasoso", nox: "+7, +5, +4, +3, +1, 0, -1" },
    { numero: 18, simbolo: "Ar", nome: "Argônio", massa: "39,948", familia: "Gases Nobres", grupo: "18", periodo: "3", classificacao: "Gás Nobre", confEletronica: "[Ne] 3s² 3p⁶", estadoFisico: "Gasoso", nox: "0" },

    // Período 4
    { numero: 19, simbolo: "K", nome: "Potássio", massa: "39,098", familia: "Metais Alcalinos", grupo: "1", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 4s¹", estadoFisico: "Sólido", nox: "+1" },
    { numero: 20, simbolo: "Ca", nome: "Cálcio", massa: "40,078", familia: "Metais Alcalino-Terrosos", grupo: "2", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 4s²", estadoFisico: "Sólido", nox: "+2" },
    { numero: 21, simbolo: "Sc", nome: "Escândio", massa: "44,956", familia: "Metais de Transição", grupo: "3", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d¹ 4s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 22, simbolo: "Ti", nome: "Titânio", massa: "47,867", familia: "Metais de Transição", grupo: "4", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d² 4s²", estadoFisico: "Sólido", nox: "+4, +3, +2" },
    { numero: 23, simbolo: "V", nome: "Vanádio", massa: "50,942", familia: "Metais de Transição", grupo: "5", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d³ 4s²", estadoFisico: "Sólido", nox: "+5, +4, +3, +2" },
    { numero: 24, simbolo: "Cr", nome: "Cromo", massa: "51,996", familia: "Metais de Transição", grupo: "6", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d⁵ 4s¹", estadoFisico: "Sólido", nox: "+6, +3, +2" },
    { numero: 25, simbolo: "Mn", nome: "Manganês", massa: "54,938", familia: "Metais de Transição", grupo: "7", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d⁵ 4s²", estadoFisico: "Sólido", nox: "+7, +6, +4, +3, +2, 0" },
    { numero: 26, simbolo: "Fe", nome: "Ferro", massa: "55,845", familia: "Metais de Transição", grupo: "8", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d⁶ 4s²", estadoFisico: "Sólido", nox: "+3, +2" },
    { numero: 27, simbolo: "Co", nome: "Cobalto", massa: "58,933", familia: "Metais de Transição", grupo: "9", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d⁷ 4s²", estadoFisico: "Sólido", nox: "+3, +2" },
    { numero: 28, simbolo: "Ni", nome: "Níquel", massa: "58,693", familia: "Metais de Transição", grupo: "10", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d⁸ 4s²", estadoFisico: "Sólido", nox: "+2, +3" },
    { numero: 29, simbolo: "Cu", nome: "Cobre", massa: "63,546", familia: "Metais de Transição", grupo: "11", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d¹⁰ 4s¹", estadoFisico: "Sólido", nox: "+2, +1" },
    { numero: 30, simbolo: "Zn", nome: "Zinco", massa: "65,38", familia: "Metais de Transição", grupo: "12", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d¹⁰ 4s²", estadoFisico: "Sólido", nox: "+2" },
    { numero: 31, simbolo: "Ga", nome: "Gálio", massa: "69,723", familia: "Metais Pós-Transição", grupo: "13", periodo: "4", classificacao: "Metal", confEletronica: "[Ar] 3d¹⁰ 4s² 4p¹", estadoFisico: "Sólido", nox: "+3" },
    { numero: 32, simbolo: "Ge", nome: "Germânio", massa: "72,630", familia: "Metalóides", grupo: "14", periodo: "4", classificacao: "Metalóide", confEletronica: "[Ar] 3d¹⁰ 4s² 4p²", estadoFisico: "Sólido", nox: "+4, +2" },
    { numero: 33, simbolo: "As", nome: "Arsênio", massa: "74,922", familia: "Metalóides", grupo: "15", periodo: "4", classificacao: "Metalóide", confEletronica: "[Ar] 3d¹⁰ 4s² 4p³", estadoFisico: "Sólido", nox: "+5, +3, -3" },
    { numero: 34, simbolo: "Se", nome: "Selênio", massa: "78,971", familia: "Calcogênios", grupo: "16", periodo: "4", classificacao: "Não-metal", confEletronica: "[Ar] 3d¹⁰ 4s² 4p⁴", estadoFisico: "Sólido", nox: "+6, +4, -2" },
    { numero: 35, simbolo: "Br", nome: "Bromo", massa: "79,904", familia: "Halogênios", grupo: "17", periodo: "4", classificacao: "Não-metal", confEletronica: "[Ar] 3d¹⁰ 4s² 4p⁵", estadoFisico: "Líquido", nox: "+7, +5, +1, -1" },
    { numero: 36, simbolo: "Kr", nome: "Criptônio", massa: "83,798", familia: "Gases Nobres", grupo: "18", periodo: "4", classificacao: "Gás Nobre", confEletronica: "[Ar] 3d¹⁰ 4s² 4p⁶", estadoFisico: "Gasoso", nox: "0, +2" },

    // Período 5
    { numero: 37, simbolo: "Rb", nome: "Rubídio", massa: "85,468", familia: "Metais Alcalinos", grupo: "1", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 5s¹", estadoFisico: "Sólido", nox: "+1" },
    { numero: 38, simbolo: "Sr", nome: "Estrôncio", massa: "87,62", familia: "Metais Alcalino-Terrosos", grupo: "2", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 5s²", estadoFisico: "Sólido", nox: "+2" },
    { numero: 39, simbolo: "Y", nome: "Ítrio", massa: "88,906", familia: "Metais de Transição", grupo: "3", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d¹ 5s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 40, simbolo: "Zr", nome: "Zircônio", massa: "91,224", familia: "Metais de Transição", grupo: "4", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d² 5s²", estadoFisico: "Sólido", nox: "+4" },
    { numero: 41, simbolo: "Nb", nome: "Nióbio", massa: "92,906", familia: "Metais de Transição", grupo: "5", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d⁴ 5s¹", estadoFisico: "Sólido", nox: "+5, +3" },
    { numero: 42, simbolo: "Mo", nome: "Molibdênio", massa: "95,95", familia: "Metais de Transição", grupo: "6", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d⁵ 5s¹", estadoFisico: "Sólido", nox: "+6, +4, +3" },
    { numero: 43, simbolo: "Tc", nome: "Tecnécio", massa: "(98)", familia: "Metais de Transição", grupo: "7", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d⁵ 5s²", estadoFisico: "Sólido", nox: "+7, +4" },
    { numero: 44, simbolo: "Ru", nome: "Rutênio", massa: "101,07", familia: "Metais de Transição", grupo: "8", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d⁷ 5s¹", estadoFisico: "Sólido", nox: "+8, +4, +3" },
    { numero: 45, simbolo: "Rh", nome: "Ródio", massa: "102,91", familia: "Metais de Transição", grupo: "9", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d⁸ 5s¹", estadoFisico: "Sólido", nox: "+3" },
    { numero: 46, simbolo: "Pd", nome: "Paládio", massa: "106,42", familia: "Metais de Transição", grupo: "10", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d¹⁰", estadoFisico: "Sólido", nox: "+2, +4" },
    { numero: 47, simbolo: "Ag", nome: "Prata", massa: "107,87", familia: "Metais de Transição", grupo: "11", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d¹⁰ 5s¹", estadoFisico: "Sólido", nox: "+1" },
    { numero: 48, simbolo: "Cd", nome: "Cádmio", massa: "112,41", familia: "Metais de Transição", grupo: "12", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d¹⁰ 5s²", estadoFisico: "Sólido", nox: "+2" },
    { numero: 49, simbolo: "In", nome: "Índio", massa: "114,82", familia: "Metais Pós-Transição", grupo: "13", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d¹⁰ 5s² 5p¹", estadoFisico: "Sólido", nox: "+3" },
    { numero: 50, simbolo: "Sn", nome: "Estanho", massa: "118,71", familia: "Metais Pós-Transição", grupo: "14", periodo: "5", classificacao: "Metal", confEletronica: "[Kr] 4d¹⁰ 5s² 5p²", estadoFisico: "Sólido", nox: "+4, +2" },
    { numero: 51, simbolo: "Sb", nome: "Antimônio", massa: "121,76", familia: "Metalóides", grupo: "15", periodo: "5", classificacao: "Metalóide", confEletronica: "[Kr] 4d¹⁰ 5s² 5p³", estadoFisico: "Sólido", nox: "+5, +3, -3" },
    { numero: 52, simbolo: "Te", nome: "Telúrio", massa: "127,60", familia: "Calcogênios", grupo: "16", periodo: "5", classificacao: "Metalóide", confEletronica: "[Kr] 4d¹⁰ 5s² 5p⁴", estadoFisico: "Sólido", nox: "+6, +4, -2" },
    { numero: 53, simbolo: "I", nome: "Iodo", massa: "126,90", familia: "Halogênios", grupo: "17", periodo: "5", classificacao: "Não-metal", confEletronica: "[Kr] 4d¹⁰ 5s² 5p⁵", estadoFisico: "Sólido", nox: "+7, +5, +1, -1" },
    { numero: 54, simbolo: "Xe", nome: "Xenônio", massa: "131,29", familia: "Gases Nobres", grupo: "18", periodo: "5", classificacao: "Gás Nobre", confEletronica: "[Kr] 4d¹⁰ 5s² 5p⁶", estadoFisico: "Gasoso", nox: "0, +6, +4, +2" },

    // Período 6 — Lantanídeos inclusos
    { numero: 55, simbolo: "Cs", nome: "Césio", massa: "132,91", familia: "Metais Alcalinos", grupo: "1", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 6s¹", estadoFisico: "Sólido", nox: "+1" },
    { numero: 56, simbolo: "Ba", nome: "Bário", massa: "137,33", familia: "Metais Alcalino-Terrosos", grupo: "2", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 6s²", estadoFisico: "Sólido", nox: "+2" },
    { numero: 57, simbolo: "La", nome: "Lantânio", massa: "138,91", familia: "Lantanídeos", grupo: "3", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 5d¹ 6s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 58, simbolo: "Ce", nome: "Cério", massa: "140,12", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹ 5d¹ 6s²", estadoFisico: "Sólido", nox: "+4, +3" },
    { numero: 59, simbolo: "Pr", nome: "Praseodímio", massa: "140,91", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f³ 6s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 60, simbolo: "Nd", nome: "Neodímio", massa: "144,24", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f⁴ 6s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 61, simbolo: "Pm", nome: "Promécio", massa: "(145)", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f⁵ 6s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 62, simbolo: "Sm", nome: "Samário", massa: "150,36", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f⁶ 6s²", estadoFisico: "Sólido", nox: "+3, +2" },
    { numero: 63, simbolo: "Eu", nome: "Európio", massa: "151,96", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f⁷ 6s²", estadoFisico: "Sólido", nox: "+3, +2" },
    { numero: 64, simbolo: "Gd", nome: "Gadolínio", massa: "157,25", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f⁷ 5d¹ 6s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 65, simbolo: "Tb", nome: "Térbio", massa: "158,93", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f⁹ 6s²", estadoFisico: "Sólido", nox: "+3, +4" },
    { numero: 66, simbolo: "Dy", nome: "Disprósio", massa: "162,50", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁰ 6s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 67, simbolo: "Ho", nome: "Hólmio", massa: "164,93", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹¹ 6s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 68, simbolo: "Er", nome: "Érbio", massa: "167,26", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹² 6s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 69, simbolo: "Tm", nome: "Túlio", massa: "168,93", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹³ 6s²", estadoFisico: "Sólido", nox: "+3, +2" },
    { numero: 70, simbolo: "Yb", nome: "Itérbio", massa: "173,05", familia: "Lantanídeos", grupo: "—", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 6s²", estadoFisico: "Sólido", nox: "+3, +2" },
    { numero: 71, simbolo: "Lu", nome: "Lutécio", massa: "174,97", familia: "Lantanídeos", grupo: "3", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d¹ 6s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 72, simbolo: "Hf", nome: "Háfnio", massa: "178,49", familia: "Metais de Transição", grupo: "4", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d² 6s²", estadoFisico: "Sólido", nox: "+4" },
    { numero: 73, simbolo: "Ta", nome: "Tântalo", massa: "180,95", familia: "Metais de Transição", grupo: "5", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d³ 6s²", estadoFisico: "Sólido", nox: "+5" },
    { numero: 74, simbolo: "W", nome: "Tungstênio", massa: "183,84", familia: "Metais de Transição", grupo: "6", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d⁴ 6s²", estadoFisico: "Sólido", nox: "+6, +4" },
    { numero: 75, simbolo: "Re", nome: "Rênio", massa: "186,21", familia: "Metais de Transição", grupo: "7", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d⁵ 6s²", estadoFisico: "Sólido", nox: "+7, +4" },
    { numero: 76, simbolo: "Os", nome: "Ósmio", massa: "190,23", familia: "Metais de Transição", grupo: "8", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d⁶ 6s²", estadoFisico: "Sólido", nox: "+8, +4" },
    { numero: 77, simbolo: "Ir", nome: "Irídio", massa: "192,22", familia: "Metais de Transição", grupo: "9", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d⁷ 6s²", estadoFisico: "Sólido", nox: "+4, +3" },
    { numero: 78, simbolo: "Pt", nome: "Platina", massa: "195,08", familia: "Metais de Transição", grupo: "10", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d⁹ 6s¹", estadoFisico: "Sólido", nox: "+4, +2" },
    { numero: 79, simbolo: "Au", nome: "Ouro", massa: "196,97", familia: "Metais de Transição", grupo: "11", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", estadoFisico: "Sólido", nox: "+3, +1" },
    { numero: 80, simbolo: "Hg", nome: "Mercúrio", massa: "200,59", familia: "Metais de Transição", grupo: "12", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", estadoFisico: "Líquido", nox: "+2, +1" },
    { numero: 81, simbolo: "Tl", nome: "Tálio", massa: "204,38", familia: "Metais Pós-Transição", grupo: "13", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", estadoFisico: "Sólido", nox: "+3, +1" },
    { numero: 82, simbolo: "Pb", nome: "Chumbo", massa: "207,2", familia: "Metais Pós-Transição", grupo: "14", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", estadoFisico: "Sólido", nox: "+4, +2" },
    { numero: 83, simbolo: "Bi", nome: "Bismuto", massa: "208,98", familia: "Metais Pós-Transição", grupo: "15", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", estadoFisico: "Sólido", nox: "+3" },
    { numero: 84, simbolo: "Po", nome: "Polônio", massa: "(209)", familia: "Calcogênios", grupo: "16", periodo: "6", classificacao: "Metal", confEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", estadoFisico: "Sólido", nox: "+4, +2" },
    { numero: 85, simbolo: "At", nome: "Astato", massa: "(210)", familia: "Halogênios", grupo: "17", periodo: "6", classificacao: "Não-metal", confEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", estadoFisico: "Sólido", nox: "-1, +1" },
    { numero: 86, simbolo: "Rn", nome: "Radônio", massa: "(222)", familia: "Gases Nobres", grupo: "18", periodo: "6", classificacao: "Gás Nobre", confEletronica: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", estadoFisico: "Gasoso", nox: "0, +2" },

    // Período 7 — Actinídeos + Elementos Transactinídeos
    { numero: 87, simbolo: "Fr", nome: "Frâncio", massa: "(223)", familia: "Metais Alcalinos", grupo: "1", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 7s¹", estadoFisico: "Sólido", nox: "+1" },
    { numero: 88, simbolo: "Ra", nome: "Rádio", massa: "(226)", familia: "Metais Alcalino-Terrosos", grupo: "2", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 7s²", estadoFisico: "Sólido", nox: "+2" },
    { numero: 89, simbolo: "Ac", nome: "Actínio", massa: "(227)", familia: "Actinídeos", grupo: "3", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 6d¹ 7s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 90, simbolo: "Th", nome: "Tório", massa: "232,04", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 6d² 7s²", estadoFisico: "Sólido", nox: "+4" },
    { numero: 91, simbolo: "Pa", nome: "Protactínio", massa: "231,04", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f² 6d¹ 7s²", estadoFisico: "Sólido", nox: "+5" },
    { numero: 92, simbolo: "U", nome: "Urânio", massa: "238,03", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f³ 6d¹ 7s²", estadoFisico: "Sólido", nox: "+6, +4, +3" },
    { numero: 93, simbolo: "Np", nome: "Netúnio", massa: "(237)", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f⁴ 6d¹ 7s²", estadoFisico: "Sólido", nox: "+5, +4, +3" },
    { numero: 94, simbolo: "Pu", nome: "Plutônio", massa: "(244)", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f⁶ 7s²", estadoFisico: "Sólido", nox: "+4, +3" },
    { numero: 95, simbolo: "Am", nome: "Amerício", massa: "(243)", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f⁷ 7s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 96, simbolo: "Cm", nome: "Cúrio", massa: "(247)", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f⁷ 6d¹ 7s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 97, simbolo: "Bk", nome: "Berquélio", massa: "(247)", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f⁹ 7s²", estadoFisico: "Sólido", nox: "+3, +4" },
    { numero: 98, simbolo: "Cf", nome: "Califórnio", massa: "(251)", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁰ 7s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 99, simbolo: "Es", nome: "Einstênio", massa: "(252)", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹¹ 7s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 100, simbolo: "Fm", nome: "Férmio", massa: "(257)", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹² 7s²", estadoFisico: "Sólido", nox: "+3" },
    { numero: 101, simbolo: "Md", nome: "Mendelévio", massa: "(258)", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹³ 7s²", estadoFisico: "Sólido", nox: "+3, +2" },
    { numero: 102, simbolo: "No", nome: "Nobélio", massa: "(259)", familia: "Actinídeos", grupo: "—", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 7s²", estadoFisico: "Sólido", nox: "+3, +2" },
    { numero: 103, simbolo: "Lr", nome: "Laurêncio", massa: "(266)", familia: "Actinídeos", grupo: "3", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 7s² 7p¹", estadoFisico: "Sólido", nox: "+3" },
    { numero: 104, simbolo: "Rf", nome: "Rutherfórdio", massa: "(267)", familia: "Metais de Transição", grupo: "4", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 6d² 7s²", estadoFisico: "Sólido", nox: "+4" },
    { numero: 105, simbolo: "Db", nome: "Dúbnio", massa: "(268)", familia: "Metais de Transição", grupo: "5", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 6d³ 7s²", estadoFisico: "Sólido", nox: "+5" },
    { numero: 106, simbolo: "Sg", nome: "Seabórgio", massa: "(269)", familia: "Metais de Transição", grupo: "6", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 6d⁴ 7s²", estadoFisico: "Sólido", nox: "+6" },
    { numero: 107, simbolo: "Bh", nome: "Bóhrio", massa: "(270)", familia: "Metais de Transição", grupo: "7", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 6d⁵ 7s²", estadoFisico: "Sólido", nox: "+7" },
    { numero: 108, simbolo: "Hs", nome: "Hássio", massa: "(277)", familia: "Metais de Transição", grupo: "8", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 6d⁶ 7s²", estadoFisico: "Sólido", nox: "+8" },
    { numero: 109, simbolo: "Mt", nome: "Meitnério", massa: "(278)", familia: "Metais de Transição", grupo: "9", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 6d⁷ 7s²", estadoFisico: "Sólido", nox: "—" },
    { numero: 110, simbolo: "Ds", nome: "Darmstádio", massa: "(281)", familia: "Metais de Transição", grupo: "10", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 6d⁹ 7s¹", estadoFisico: "Sólido", nox: "—" },
    { numero: 111, simbolo: "Rg", nome: "Roentgênio", massa: "(282)", familia: "Metais de Transição", grupo: "11", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 6d¹⁰ 7s¹", estadoFisico: "Sólido", nox: "—" },
    { numero: 112, simbolo: "Cn", nome: "Copernício", massa: "(285)", familia: "Metais de Transição", grupo: "12", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", estadoFisico: "Sólido", nox: "+2" },
    { numero: 113, simbolo: "Nh", nome: "Nihônio", massa: "(286)", familia: "Metais Pós-Transição", grupo: "13", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 7s² 7p¹", estadoFisico: "Sólido", nox: "+3, +1" },
    { numero: 114, simbolo: "Fl", nome: "Fleróvio", massa: "(289)", familia: "Metais Pós-Transição", grupo: "14", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 7s² 7p²", estadoFisico: "Sólido", nox: "+2, +4" },
    { numero: 115, simbolo: "Mc", nome: "Moscóvio", massa: "(290)", familia: "Metais Pós-Transição", grupo: "15", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 7s² 7p³", estadoFisico: "Sólido", nox: "+3, +1" },
    { numero: 116, simbolo: "Lv", nome: "Livermório", massa: "(293)", familia: "Calcogênios", grupo: "16", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 7s² 7p⁴", estadoFisico: "Sólido", nox: "+4, +2" },
    { numero: 117, simbolo: "Ts", nome: "Tenesso", massa: "(294)", familia: "Halogênios", grupo: "17", periodo: "7", classificacao: "Metal", confEletronica: "[Rn] 5f¹⁴ 7s² 7p⁵", estadoFisico: "Sólido", nox: "-1, +1" },
    { numero: 118, simbolo: "Og", nome: "Oganessônio", massa: "(294)", familia: "Gases Nobres", grupo: "18", periodo: "7", classificacao: "Gás Nobre", confEletronica: "[Rn] 5f¹⁴ 7s² 7p⁶", estadoFisico: "Gasoso", nox: "0" }
];
// === FUNÇÕES DA TABELA PERIÓDICA ===
function criarElementos() {
    const container = document.getElementById("tabelaPeriodicaDiv");
    if (!container) return;

    container.innerHTML = `
        <button id="voltarTabela">Voltar</button>
        <h1>Tabela Periódica</h1>
        <div id="tabela-grid"></div>
    `;
    document.getElementById("voltarTabela").onclick = function () {
        document.getElementById("tabelaPeriodicaDiv").style.display = "none";
        document.getElementById("Opcoes").style.display = "block";
    };

    const grid = document.getElementById("tabela-grid");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(18, 60px)";
    grid.style.gap = "4px";
    grid.style.justifyContent = "center";
    grid.style.marginTop = "20px";

    elementos.forEach(el => {
        const botao = document.createElement("button");
        botao.style.width = "58px";
        botao.style.height = "65px";
        botao.style.padding = "2px";
        botao.style.margin = "0";
        botao.style.fontSize = "11px";
        botao.style.borderRadius = "4px";
        botao.style.backgroundColor = corPorClassificacao(el.classificacao);
        botao.style.color = "#fff";
        botao.style.border = "none";
        botao.style.cursor = "pointer";

        botao.innerHTML = `
            <small style="font-size:9px">${el.numero}</small><br>
            <strong style="font-size:15px">${el.simbolo}</strong>
        `;
        botao.title = `${el.nome} — ${el.massa}`;
        botao.onclick = () => mostrarElemento(el);

        let coluna = parseInt(el.grupo) || 1;
        let linha = parseInt(el.periodo) || 1;

        // ✅ SUBSTITUIR POR ESSE
        if (el.grupo === "—") {
            if (el.periodo === "6") { linha = 8; coluna = el.numero - 54 + 2; }
            if (el.periodo === "7") { linha = 10; coluna = el.numero - 88 + 2; }
        } else {
            coluna = parseInt(el.grupo);
            linha = parseInt(el.periodo);
        }

        // Ajuste especial para Lantanídeos/Actinídeos que tem grupo definido
        if (el.numero >= 57 && el.numero <= 71) { linha = 8; coluna = el.numero - 54 + 2; }
        if (el.numero >= 89 && el.numero <= 103) { linha = 10; coluna = el.numero - 88 + 2; }

        botao.style.gridColumn = coluna;
        botao.style.gridRow = linha;
        grid.appendChild(botao);
    });
}

function corPorClassificacao(tipo) {
    const cores = {
        "Metal": "#4299e1",
        "Metal de Transição": "#ed8936",
        "Metal Pós-Transição": "#38b2ac",
        "Metalóide": "#48bb78",
        "Não-metal": "#9f7aea",
        "Gás Nobre": "#f56565",
        "Halogênios": "#f6ad55",
        "Calcogênios": "#68d391",
        "Metais Alcalinos": "#fc8181",
        "Metais Alcalino-Terrosos": "#f6e05e",
        "Lantanídeos": "#90cdf4",
        "Actinídeos": "#b794f4"
    };
    return cores[tipo] || "#a0aec0";
}

function mostrarElemento(el) {
    document.getElementById("tabelaPeriodicaDiv").style.display = "none";
    const divInfo = document.createElement("div");
    divInfo.id = "paginaElemento";
    divInfo.className = "secao";
    divInfo.style.display = "block";
    divInfo.innerHTML = `
        <h2>${el.nome} (${el.simbolo})</h2>
        <p>
            <strong>Número Atômico:</strong> ${el.numero}<br>
            <strong>Massa Atômica:</strong> ${el.massa} u<br>
            <strong>Família:</strong> ${el.familia}<br>
            <strong>Período:</strong> ${el.periodo}<br>
            <strong>Classificação:</strong> ${el.classificacao}<br>
            <strong>Configuração Eletrônica:</strong> ${el.confEletronica}<br>
            <strong>Estado Físico (20°C):</strong> ${el.estadoFisico}
        </p>
        <button onclick="voltarTabela()">Voltar</button>
    `;
    document.body.appendChild(divInfo);
}

function voltarTabela() {
    const pagina = document.getElementById("paginaElemento");
    if (pagina) pagina.remove();
    document.getElementById("tabelaPeriodicaDiv").style.display = "block";
}

// === FUNÇÕES DO BALANCEADOR ===
function separadorVetChar(vet, separador) {
    const parteUm = [];
    const parteDois = [];
    let separa = -1;
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] === separador) {
            separa = i;
            break;
        }
        parteUm.push(vet[i]);
    }
    if (separa !== -1) {
        for (let i = separa + 1; i < vet.length; i++) {
            parteDois.push(vet[i]);
        }
    }
    return [parteUm, parteDois];
}

function contar(vet) {
    const resultado = {};
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] >= 'A' && vet[i] <= 'Z') {
            let nome = vet[i];
            if (i + 1 < vet.length && vet[i + 1] >= 'a' && vet[i + 1] <= 'z') {
                nome += vet[i + 1];
                i++;
            }
            let qtd = 1;
            if (i + 1 < vet.length && vet[i + 1] >= '1' && vet[i + 1] <= '9') {
                qtd = parseInt(vet[i + 1]);
                i++;
            }
            resultado[nome] = (resultado[nome] || 0) + qtd;
        }
    }
    return resultado;
}

function proximaCombinacao(coef, limite) {
    let posicao = 0;
    while (posicao < coef.length) {
        coef[posicao]++;
        if (coef[posicao] <= limite) {
            return true;
        }
        coef[posicao] = 1;
        posicao++;
    }
    return false;
}

function verificar(coef, reagentes, produtos) {
    const totalEsquerdo = {};
    const totalDireito = {};
    for (let i = 0; i < reagentes.length; i++) {
        const mult = coef[i];
        for (const elem in reagentes[i]) {
            totalEsquerdo[elem] = (totalEsquerdo[elem] || 0) + (reagentes[i][elem] * mult);
        }
    }
    for (let i = 0; i < produtos.length; i++) {
        const mult = coef[reagentes.length + i];
        for (const elem in produtos[i]) {
            totalDireito[elem] = (totalDireito[elem] || 0) + (produtos[i][elem] * mult);
        }
    }
    const chavesEsq = Object.keys(totalEsquerdo);
    const chavesDir = Object.keys(totalDireito);
    if (chavesEsq.length !== chavesDir.length) return false;
    for (const chave of chavesEsq) {
        if (totalEsquerdo[chave] !== totalDireito[chave]) {
            return false;
        }
    }
    return true;
}

function balancear() {
    const campo = document.getElementById("equacao");
    const saida = document.getElementById("resultado");
    const entrada = campo.value.trim();
    if (!entrada) {
        saida.textContent = "Digite uma equação!";
        return;
    }
    const equacao = entrada.replace(/ /g, "");
    const vet = equacao.split("");
    if (!equacao.includes("=")) {
        saida.textContent = "Erro: Coloque o sinal de = entre reagentes e produtos";
        return;
    }
    const [ladoEsquerdoVet, ladoDireitoVet] = separadorVetChar(vet, '=');
    let qtdReagentes = 1;
    for (const c of ladoEsquerdoVet) if (c === '+') qtdReagentes++;
    const reagentes = [];
    let temp = [...ladoEsquerdoVet];
    for (let i = 0; i < qtdReagentes; i++) {
        const [parte1, parte2] = separadorVetChar(temp, '+');
        reagentes.push(contar(parte1));
        temp = parte2;
    }
    let qtdProdutos = 1;
    for (const c of ladoDireitoVet) if (c === '+') qtdProdutos++;
    const produtos = [];
    temp = [...ladoDireitoVet];
    for (let i = 0; i < qtdProdutos; i++) {
        const [parte1, parte2] = separadorVetChar(temp, '+');
        produtos.push(contar(parte1));
        temp = parte2;
    }
    let texto = "";
    texto += "Reagentes:\n";
    for (let i = 0; i < reagentes.length; i++) {
        texto += " " + (i + 1) + "ª substância: " + JSON.stringify(reagentes[i]) + "\n";
    }
    texto += "\nProdutos:\n";
    for (let i = 0; i < produtos.length; i++) {
        texto += " " + (i + 1) + "ª substância: " + JSON.stringify(produtos[i]) + "\n";
    }
    const coef = [];
    for (let i = 0; i < qtdReagentes + qtdProdutos; i++) coef.push(1);
    const limiteMaximo = 30;
    let achou = false;
    do {
        if (verificar(coef, reagentes, produtos)) {
            achou = true;
            break;
        }
    } while (proximaCombinacao(coef, limiteMaximo));
    if (achou) {
        texto += "\n BALANCEADO!\n";
        texto += "📌 Coeficientes: [" + coef.join(", ") + "]";
    } else {
        texto += "\n Não consegui balancear até o limite " + limiteMaximo;
    }
    saida.textContent = texto;
}

// === INICIALIZA TUDO QUANDO A PÁGINA CARREGA ===
window.onload = function () {
    criarElementos();
    const botao = document.getElementById("btnBalancear");
    if (botao) {
        botao.addEventListener("click", balancear);
        console.log(" Botão conectado com sucesso!");
    } else {
        console.log(" Botão não encontrado! Verifique o ID no HTML.");
    }
};

// =====================================================
// BANCO DE RESUMOS — 3 ASSUNTOS
// =====================================================
const RESUMOS = {
    "regra-de-markovnikov": {
        titulo: "Regra de Markovnikov",
        conteudo: `
<h3>Regra de Markovnikov</h3>
<h4>O que é?</h4>
<p>Serve para prever onde vai se ligar cada átomo de uma molécula que está sendo adicionada a uma ligação dupla entre carbonos (C=C) ou tripla (C≡C). A regra só é necessária quando a ligação é assimétrica — ou seja, quando um carbono da dupla tem mais hidrogênios do que o outro.</p>
<div class="destaque">
    <strong>Frase para decorar:</strong><br>
    O hidrogênio vai para onde já tem mais hidrogênios.
</div>
<h4>Como funciona na prática?</h4>
<p>Quando adicionamos uma substância como H-Cl, H-Br ou H-OH a uma ligação dupla:</p>
<ul>
    <li>O hidrogênio (H) se liga ao carbono da dupla que tem mais hidrogênios.</li>
    <li>O restante da molécula (Cl, Br ou OH) se liga ao carbono da dupla que tem menos hidrogênios.</li>
</ul>
<h4>Por que acontece assim? — A explicação completa</h4>
<p>Quando a ligação dupla se rompe, forma-se um intermediário com carga positiva chamado carbocátion. A reação prefere formar o carbocátion mais estável:</p>
<ul>
    <li>Carbono ligado a 3 outros carbonos → Terciário → Mais estável</li>
    <li>Carbono ligado a 2 outros carbonos → Secundário → Estável</li>
    <li>Carbono ligado a 1 outro carbono → Primário → Menos estável</li>
</ul>
<p>Por isso, o hidrogênio sai do carbono mais substituído e deixa a carga no carbono que segura melhor.</p>
<h4>Exemplo 1 — Propeno + HCl</h4>
<p>Molécula: CH₂ = CH − CH₃</p>
<ul>
    <li>Carbono da esquerda: 2 hidrogênios → recebe o H → carbocátion formado no carbono do meio (secundário)</li>
    <li>Carbono do meio: 1 hidrogênio → recebe o Cl</li>
</ul>
<p>Resultado: CH₃ − CH(Cl) − CH₃</p>
<h4>Exemplo 2 — 1-Buteno + Água</h4>
<p>Molécula: CH₂ = CH − CH₂ − CH₃</p>
<ul>
    <li>Carbono 1: 2 hidrogênios → recebe o H</li>
    <li>Carbono 2: 1 hidrogênio → recebe o OH</li>
</ul>
<p>Resultado: CH₃ − CH(OH) − CH₂ − CH₃</p>
<h4>Exemplo 3 — 2-Metilpropeno + HBr</h4>
<p>Molécula: CH₂ = C(CH₃)₂</p>
<ul>
    <li>Carbono da esquerda: 2 hidrogênios → recebe o H</li>
    <li>Carbono da direita: 0 hidrogênios → recebe o Br → forma carbocátion terciário (mais estável)</li>
</ul>
<p>Resultado: CH₃ − C(Br)(CH₃) − CH₃</p>
<h4>Exceções — quando a regra não se aplica</h4>
<ul>
    <li>Dupla simétrica: os dois carbonos têm a mesma quantidade de hidrogênios → tanto faz onde se ligam.</li>
    <li>Presença de peróxido (H₂O₂): só acontece com HBr! Tudo se inverte → o H vai para o carbono com menos hidrogênios. Não funciona com HCl nem HI.</li>
</ul>
<div class="destaque">
    <strong>Resumo completo:</strong><br>
    Mais hidrogênios → recebe H.<br>
    Menos hidrogênios → recebe o resto.<br>
    Peróxido + HBr → inverte tudo.<br>
    Sempre forma o carbocátion mais estável.
</div>
        `
    },

    "nox": {
        titulo: "Número de Oxidação (Nox)",
        conteudo: `
<h3>Número de Oxidação — Nox</h3>
<h4>O que é?</h4>
<p>É a carga elétrica que um átomo teria se todos os elétrons das ligações fossem contados com o átomo mais eletronegativo. Pense assim:</p>
<ul>
    <li>Nox positivo (+): o átomo parece ter perdido elétrons.</li>
    <li>Nox negativo (−): o átomo parece ter ganhado elétrons.</li>
    <li>Nox zero (0): o átomo está neutro.</li>
</ul>
<h4>Regras fixas — por ordem de prioridade</h4>
<table>
    <tr>
        <td>Substância simples (O₂, Fe, H₂, P₄, S₈)</td>
        <td><strong>0</strong></td>
        <td>Nenhuma exceção</td>
    </tr>
    <tr>
        <td>Metais do Grupo 1 (Li, Na, K, Ag)</td>
        <td><strong>+1</strong></td>
        <td>Sempre +1</td>
    </tr>
    <tr>
        <td>Metais do Grupo 2 (Be, Mg, Ca, Ba, Zn)</td>
        <td><strong>+2</strong></td>
        <td>Sempre +2</td>
    </tr>
    <tr>
        <td>Alumínio (Al)</td>
        <td><strong>+3</strong></td>
        <td>Sempre +3</td>
    </tr>
    <tr>
        <td>Hidrogênio (H)</td>
        <td><strong>+1</strong></td>
        <td>Em hidretos metálicos (NaH, CaH₂) = −1</td>
    </tr>
    <tr>
        <td>Oxigênio (O)</td>
        <td><strong>−2</strong></td>
        <td>Peróxidos (H₂O₂, Na₂O₂) = −1; OF₂ = +2</td>
    </tr>
    <tr>
        <td>Flúor (F)</td>
        <td><strong>−1</strong></td>
        <td>Sempre −1</td>
    </tr>
    <tr>
        <td>Outros halogênios (Cl, Br, I)</td>
        <td><strong>−1</strong></td>
        <td>Se ligados ao O ou F → valor positivo</td>
    </tr>
</table>
<h4>Regra principal</h4>
<ul>
    <li>Molécula neutra → soma de todos os Nox = 0</li>
    <li>Íon → soma de todos os Nox = carga do íon</li>
</ul>
<h4>Exemplo 1 — Nox do Enxofre em H₂SO₄</h4>
<p>H = +1, O = −2, S = x</p>
<p>2 × (+1) + x + 4 × (−2) = 0 → +2 + x − 8 = 0 → x = +6</p>
<h4>Exemplo 2 — Nox do Crômio em K₂Cr₂O₇</h4>
<p>K = +1, O = −2, Cr = x</p>
<p>2 × (+1) + 2x + 7 × (−2) = 0 → +2 + 2x − 14 = 0 → 2x = 12 → x = +6</p>
<h4>Exemplo 3 — Nox do Manganês no íon MnO₄⁻</h4>
<p>Carga do íon = −1 → soma = −1</p>
<p>O = −2, Mn = x</p>
<p>x + 4 × (−2) = −1 → x − 8 = −1 → x = +7</p>
<h4>Exemplo 4 — Mesmo elemento com Nox diferente na mesma molécula</h4>
<p>Molécula: NH₄NO₃</p>
<p>Atenção: o Nitrogênio está em dois grupos diferentes! Calcule separadamente:</p>
<p>No grupo amônio: N + 4 × (+1) = +1 → N + 4 = +1 → N = −3</p>
<p>No grupo nitrato: N + 3 × (−2) = −1 → N − 6 = −1 → N = +5</p>
<p>O mesmo elemento pode ter números de oxidação diferentes na mesma substância!</p>
<h4>Exemplo 5 — Elemento em íon complexo com parênteses</h4>
<p>Calcular o Nox do Ferro no íon Fe(CN)₆⁴⁻</p>
<p>Cada grupo CN tem carga −1 → 6 × (−1) = −6</p>
<p>Fe + (−6) = −4 → Fe = −4 + 6 → Fe = +2</p>
<div class="destaque">
    <strong>Passo a passo infalível:</strong><br>
    1. Siga sempre a ordem das regras.<br>
    2. Se o mesmo elemento aparecer em grupos diferentes, calcule separadamente.<br>
    3. Iguale a soma à carga total (0 ou carga do íon).<br>
    4. Resolva a equação com atenção aos sinais negativos.
</div>
        `
    },

    "oxido-reducao": {
        titulo: "Reações de Oxirredução",
        conteudo: `
<h3>Reações de Oxidação e Redução</h3>
<h4>O que são?</h4>
<p>São reações em que há transferência de elétrons de um átomo para outro. Como o elétron tem carga negativa:</p>
<ul>
    <li>Quem perde elétrons → o Nox aumenta.</li>
    <li>Quem ganha elétrons → o Nox diminui.</li>
</ul>
<div class="destaque">
    <strong>Resumo direto:</strong><br>
    Oxidação → perde elétrons → Nox sobe → é o agente redutor<br>
    Redução → ganha elétrons → Nox desce → é o agente oxidante
</div>
<h4>Por que o nome é invertido?</h4>
<p>O agente oxidante causa a oxidação do outro elemento → ele próprio se reduz.<br>
O agente redutor causa a redução do outro elemento → ele próprio se oxida.</p>
<h4>Exemplo 1 — Identificar em reação simples</h4>
<p>Zn + 2 HCl → ZnCl₂ + H₂</p>
<ul>
    <li>Zinco: Nox foi de 0 para +2 → subiu → oxidou-se → é o agente redutor</li>
    <li>Hidrogênio: Nox foi de +1 para 0 → desceu → reduziu-se → é o agente oxidante</li>
    <li>Cloro: Nox permaneceu −1 → não participou da transferência</li>
</ul>
<h4>Exemplo 2 — Reação com compostos mais complexos</h4>
<p>K₂Cr₂O₇ + 6 KI + 7 H₂SO₄ → Cr₂(SO₄)₃ + 3 I₂ + 4 K₂SO₄ + 7 H₂O</p>
<ul>
    <li>Crômio: Nox foi de +6 para +3 → desceu → reduziu-se → é o agente oxidante</li>
    <li>Iodo: Nox foi de −1 para 0 → subiu → oxidou-se → é o agente redutor</li>
    <li>Enxofre, Potássio e Oxigênio: não mudaram</li>
</ul>
<h4>Quantos elétrons foram transferidos?</h4>
<p>Calcule a variação do Nox e multiplique pela quantidade de átomos:</p>
<p>No exemplo acima: cada átomo de Cr diminui 3 unidades × 2 átomos = 6 elétrons ganhos.<br>
Cada átomo de I aumenta 1 unidade × 6 átomos = 6 elétrons perdidos.<br>
O número de elétrons perdidos é igual ao número de elétrons ganhos.</p>
<h4>Balanceamento de equações por Nox — passo a passo</h4>
<p>Equação: HNO₃ + H₂S → NO + S + H₂O</p>
<ol>
    <li>Calcule o Nox dos elementos que mudam: N vai de +5 para +2 (queda de 3 unidades); S vai de −2 para 0 (aumento de 2 unidades).</li>
    <li>Inverta os valores da variação e coloque como coeficientes: coloque 2 no N e 3 no S.</li>
    <li>Escreva: 2 HNO₃ + 3 H₂S → 2 NO + 3 S + H₂O</li>
    <li>Termine de balancear os elementos que não mudam por tentativa: ajuste H e O → 4 H₂O.</li>
    <li>Resultado final: 2 HNO₃ + 3 H₂S → 2 NO + 3 S + 4 H₂O</li>
</ol>
<h4>Tipos de reações de oxirredução</h4>
<ul>
    <li>Deslocamento: um elemento puro troca de lugar com outro em um composto.</li>
    <li>Desproporção: o mesmo elemento oxida e reduz ao mesmo tempo na mesma reação.</li>
    <li>Composição: elementos puros se unem para formar um composto.</li>
    <li>Decomposição: um composto se quebra e forma elementos puros.</li>
</ul>
<div class="destaque">
    <strong>Resumo final:</strong><br>
    Nox sobe → oxida → é o redutor → perde elétrons.<br>
    Nox desce → reduz → é o oxidante → ganha elétrons.<br>
    No balanceamento: calcule a variação → inverta os números → termine por tentativa.<br>
    Elétrons perdidos = elétrons ganhos. Sempre.
</div>
        `
    },

    "delta-nox": {
        titulo: "Variação de NOX (ΔNOX)",
        conteudo: `
<h3>Como Calcular o ΔNOX de Forma Simples</h3>

<h4>1. O QUE É NOX?</h4>
<p>NOX significa Número de Oxidação. Ele representa, de forma simplificada, a quantidade de elétrons que um átomo perdeu ou ganhou em uma reação.</p>
<ul>
    <li>Fe²⁺ → NOX = +2</li>
    <li>Fe³⁺ → NOX = +3</li>
    <li>O²⁻ → NOX = -2</li>
    <li>Na⁺ → NOX = +1</li>
    <li>Elemento puro (sem carga): Fe⁰, Cu⁰, O₂⁰ → NOX = 0</li>
</ul>

<h4>2. O QUE É ΔNOX?</h4>
<p>ΔNOX é a variação do número de oxidação de um elemento durante uma reação. É quanto esse número mudou do começo para o fim da reação.</p>
<div class="destaque">
Fórmula:<br>
ΔNOX = NOX depois − NOX antes
</div>

<h4>3. COMO SABER SE FOI OXIDAÇÃO OU REDUÇÃO</h4>
<div class="destaque">
Se o NOX AUMENTA → Oxidação (o átomo perdeu elétrons)<br>
Se o NOX DIMINUI → Redução (o átomo ganhou elétrons)
</div>

<p>Linha numérica para não confundir:</p>
<p style="text-align:center; font-size:20px; font-weight:bold;">← reduzir ... -2  -1   0  +1  +2  +3 ... oxidar →</p>
<ul>
    <li>Valor vai para a DIREITA → número aumentou → OXIDAÇÃO</li>
    <li>Valor vai para a ESQUERDA → número diminuiu → REDUÇÃO</li>
</ul>

<h4>4. EXEMPLO PASSO A PASSO</h4>
<p>Exemplo 1: Fe²⁺ → Fe³⁺</p>
<p>Antes: +2 | Depois: +3</p>
<p>ΔNOX = +3 − (+2) = +1</p>
<p>O número aumentou → O ferro sofreu OXIDAÇÃO.</p>

<p>Exemplo 2: Cu²⁺ → Cu⁰</p>
<p>Antes: +2 | Depois: 0</p>
<p>ΔNOX = 0 − (+2) = -2</p>
<p>O número diminuiu → O cobre sofreu REDUÇÃO.</p>

<h4>5. REGRAS FIXAS PARA DESCOBRIR O NOX</h4>
<p>Quando o NOX não estiver escrito, use essas regras que nunca mudam:</p>
<ul>
    <li>Metais do Grupo 1 (Li, Na, K, Rb, Cs): NOX = +1</li>
    <li>Metais do Grupo 2 (Mg, Ca, Sr, Ba): NOX = +2</li>
    <li>Oxigênio (quase sempre): NOX = -2</li>
    <li>Hidrogênio (quase sempre): NOX = +1</li>
    <li>Elemento sozinho, puro ou sem combinação: NOX = 0</li>
    <li>Composto neutro: a soma de todos os NOX é sempre igual a 0</li>
</ul>

<p>Exemplo: Descobrir o NOX do ferro em Fe₂O₃</p>
<ul>
    <li>Oxigênio tem NOX = -2</li>
    <li>São 3 oxigênios: 3 × (-2) = -6</li>
    <li>O composto é neutro, então os 2 átomos de ferro somam +6</li>
    <li>Cada átomo de ferro: +6 ÷ 2 = +3</li>
    <li>Resultado: NOX do Fe = +3</li>
</ul>

<h4>6. VARIAÇÃO QUANDO HÁ VÁRIOS ÁTOMOS</h4>
<p>Se existir mais de um átomo do elemento na mesma molécula, calcule a variação de um e multiplique pela quantidade total de átomos.</p>
<p>Exemplo: Em Fe₂O₃ → Fe⁺³ se transforma em Fe⁰</p>
<ul>
    <li>Variação de cada átomo: 3 unidades</li>
    <li>Existem 2 átomos: 2 × 3 = 6</li>
    <li>Variação total = 6</li>
</ul>

<h4>7. COMO USAR NO BALANCEAMENTO DE OXIRREDUÇÃO</h4>
<p>Descubra a variação total de cada elemento e depois troque esses valores entre si como coeficientes.</p>
<p>Exemplo: Fe₂O₃ + CO → Fe + CO₂</p>
<ul>
    <li>Ferro: +3 → 0 → Variação = 3 → 2 átomos → Total = 6</li>
    <li>Carbono: +2 → +4 → Variação = 2 → Total = 2</li>
    <li>Divida os totais: 6 ÷ 2 = 3</li>
    <li>Coloque 3 na frente do CO e do CO₂</li>
    <li>Equação balanceada: Fe₂O₃ + 3CO → 2Fe + 3CO₂</li>
</ul>

<h4>8. PASSO A PASSO PARA ACERTAR 99,99% DAS QUESTÕES</h4>
<div class="destaque">
1. Descubra o NOX do elemento ANTES da reação<br>
2. Descubra o NOX do mesmo elemento DEPOIS da reação<br>
3. Calcule: ΔNOX = DEPOIS − ANTES<br>
4. Resultado positivo = NOX aumentou = OXIDAÇÃO<br>
5. Resultado negativo = NOX diminuiu = REDUÇÃO<br>
6. Se houver mais de 1 átomo, multiplique a variação pela quantidade
</div>

<h4>9. RESUMÃO</h4>
<ul>
    <li>NOX = valor da carga do átomo</li>
    <li>ΔNOX = quanto o valor mudou</li>
    <li>Número subiu → Oxidação</li>
    <li>Número desceu → Redução</li>
    <li>Quando não souber o NOX, use as regras fixas e a soma zero</li>
</ul>
`
    }
};

// === NAVEGAÇÃO ENTRE RESUMOS — GERADO AUTOMATICAMENTE ===
document.addEventListener("DOMContentLoaded", function () {
    // Gera os botões automaticamente a partir do objeto RESUMOS
    const lista = document.getElementById("listaAssuntos");
    if (lista) {
        lista.innerHTML = ""; // Limpa antes de gerar

        // Percorre TODOS os itens e cria botão
        for (const chave in RESUMOS) {
            const botao = document.createElement("button");
            botao.className = "botao-assunto";
            botao.dataset.assunto = chave;
            botao.textContent = RESUMOS[chave].titulo;
            lista.appendChild(botao);
        }
    }

    // Ação ao clicar no botão
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("botao-assunto")) {
            const chave = e.target.dataset.assunto;
            const resumo = RESUMOS[chave];
            if (resumo) {
                document.getElementById("listaAssuntos").style.display = "none";
                document.getElementById("conteudoResumo").style.display = "block";
                document.getElementById("conteudoResumo").innerHTML = `
                    <button class="voltarLista">Voltar à lista</button>
                    ${resumo.conteudo}
                `;
            }
        }

        // Voltar à lista
        if (e.target.classList.contains("voltarLista")) {
            document.getElementById("conteudoResumo").style.display = "none";
            document.getElementById("listaAssuntos").style.display = "block";
        }
    });
});