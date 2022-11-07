 Algoritma her seferinde dizinin üzerinde ileri doğru ilerleyerek, dizinin bir elemanını alıp geriye doğru elemanlar ile bir bir sıralar ve her bir sıralamasında, eğer sıraladığı elemandan daha küçükse o elemanla yer değiştirerek bir geriye atar.
# [22,27,16,2,18,6]
[22,(27,16),2,18,6] önce 27 ile 16 yı yer değiştirdim 
# [(22,16),27,2,18,6] şimdi geriye doğru sıralıyorum.
# [16,22,(27,2),18,6] sırada 27 ve 2 ikilisi var
# [16,(22,2),27,18,6] geriye doğru sıralamaya devam ediyorum
# [16,2,(22,27),18,6]
6 yı geriye doğru karşılaştırarak sıralıyorum [2,16,22,27,18,6]==> [2,16,22,18,(27,6)] ==> 18 i uygun yere taşıyalım
# [2,16,18,22,6,27] ==>şimdi de 6 yı uygun yre taşıyalım => [2,6,16,18,22,27]
# [2,6,16,18,22,27] 



# [(16,8),22,14,28]
önce 16 ve 8 i karşılaştırdım. 8 i öne aldım.
# [8,(16,22),14,28]
16-22 yi karşılaştırdım. yoluma devam ediyorum.
# [8,16,(22,14),28]
22-14 ü karşılaştırdım. 
# [8,16,(14,22),28]
şimdi geriye doğru bakıyorum 14 ü karşılaştırıyorum
# [(8,16,14),22,28] oldu. sonra 16 ve 14 ü yer değiştirdim

# [8,14,16,22,28] eğer sayıyı karşılaştırdığımda öceki sayılardan küçük olursa onlarla da karşılaştırıp sıralamam gerekir.

# O(n^2)
