import React, { useState } from "react";
import Styles from "./rule.module.css"

const Rule = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [changes, setChanges] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRuleChange = (event) => {
    const ruleChangeImage = event.target.files[0];
    if (ruleChangeImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setChanges([...changes, { type: "Rule Change", image: reader.result }]);
      };
      reader.readAsDataURL(ruleChangeImage);
    }
  };

  const handleBarcodeChange = (event) => {
    const barcodeChangeImage = event.target.files[0];
    if (barcodeChangeImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setChanges([...changes, { type: "Barcode Change", image: reader.result }]);
      };
      reader.readAsDataURL(barcodeChangeImage);
    }
  };

  return (
    <div className={Styles.container} style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Rule Change </h1>
      {selectedImage ? (
        <img 
          src={selectedImage}
          alt="Selected"
          style={{ maxWidth: "300px", maxHeight: "300px",margin:"auto" }}
        />
      ) : (
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXFxUXGBgXFxcYFRgVFRcXFxUVFxcYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGy0fHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAT4AnwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xABAEAABAwIDBAgDBgUDBAMAAAABAAIRAyEEEjFBUWGBBQYTInGRobEywfAUQlLR4fEjYnKCkgdDolPC0tMkY7L/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAIhEAAgICAgMBAAMAAAAAAAAAAAECEQMSITETQVEEMmFx/9oADAMBAAIRAxEAPwDyuFmVFyrWVeieXsBLFosRi1ZlTQ9gOVahFIUS1VZVg8qm0LcLYagGzYCwtR2Ut11hYVNEbCpYttpozmhbDdyY9gPZwhvCZc1BLUDiwBatCmmMiNSooKc6FRSU20kw5qwcAkyd2yBpgIRCbOHMSVo0+CkEwmRZkR+zWZU7Oe2LFi0WJlzVAtQGwuWqMJjKouYqKUgOVEoUpK0WpjC6oY3IP2Y09VF2HA0JnYmjvQ+1WdsViJtqJRKVxpyW3vJO1YZA3KxbAKlNDFPgmXBSYeCYKQOnh1NzVJ1TetOItvU8lbAnQpUWxJWhTJTLGWg+qGNM1k0KE8SmnmBbwQnuAMAKUVY4aKGaKcIQ3hZxZkxN9NDLE6QVjqNlomQ0V+VZlTLqagWQrTM7Admi02wrGhhg5gW6mA3Kd10XyLYd++8qNeltiycp0IsAhvpE+Ci1ZXNCLaZJU3M3psU8uxZUpz4qthJCJpzqVjKRTzqJEaLTjGlz5BPYoQdQnxRKGHRn1DuW2PgItj4IvYAhhw8EwGSUfsABMJN0VZWkh29AqkC0kp6qybAIYoNbaC4ppibLnsVo0U6aa0QuZMgR7FQrttCsTQQKuHKaaKB4PDzog1sFB0Vjg6ZHBHrUS4SLo3pkONorqFLQBONwxGq3hcMZ+rK0yACNfUqZSouEbKltIbkF2HurpuHBKLTwIAmFHko0WOznn4Q3shjCn910dSiJ5JSpRmVSyWDhRSvo8ECpTJ2K6rULQlG0BOi0jIyaK51CyhRw5Jvorg0QojCHbonuFCD2RsWNYYunjQ4qQpJWMrXs2QhdkBrdWVRgm6hkBVbAW3ZFbYzgnMixrJXLY6B0aROuiLWw7Y2Sj02idJR3YUWMADx+WxZuXJqlaKNzYRqVExuCtamFabhQOHKryWRpQhToEI9Ib7I7RwR3jcEnMpR4FqdI7E3Tw9rmFFgLtRCnUFtSs22zSPAtVpid6Wrug2CfYwbkvXpqoslsqw6TJCj9nJ2QFaMogC2imGRqttjOrEGYcbvRSrUU7oLj81EsU7MqkUz6IQ8qtnYfyUX4Zu5WpkuJSCgXHaUXssqs30SBI0QSyVakRrRZGmiMw4O1FxDShNJXGpOirSZgpOaUwCD4omHxAGtwnBRpvuDB4KXL6bQSfTB02WuIKE5mqbNJw+9I4XKlkbGsnwUWbOPAlQw+06KbyN0/JHYwDYZKnVoRYDVPbknWlwV9Sodi1TkotWmdqlSYd6tGbIGkdbID2p807aFALPJMJCzKbTqOSIaIJ4JtrICG6oNiE2KgXYjai9iI0WmuEyVKrUOoHgjkaYB1AKJwsao9Mh3jKaGXTai2gVMp30QTCE7AjYrPFMDeKnh6QeJIIHqq2oKt0abRBQqmCOxPmlwWtFzqRDSK/wCz3uFZYZo0YPM6eChn4Sj4eqybi6cnZWJpMd+yuiCPVRq4YgakFGpVA6xdJ8YlSrM2ZY4zPssbdno1FxtFYaR23R2UyRdSqVcuonwS5xjRdp5Faq2crcUDxFGNiA2NyeOLY4XJB+tCl3MG8ytF/ZnKu0R+rJZ7IdKk6oRoEGoSdVaRlKRGs8zshDCmWKAoRc2WiRDkyTDNvdSLgNTPOEviMQwH4krjMUyJAJKahYOdD3bgWC2MWAOKTw9QESRJ2JBmZz5NhKeiZHkZeN7wko9GqItMJGpWsBBjyQu1dECyjSy1kOwFCVGphE46mRtUm1TtAK89SO54vpS1sKhNpK8qMadhHqtDAzcXVqZi8Db4KkMhM0MTGp1TX2IcQguwarZMahOPIKtVCU7AONoCafh1lPDxN4CuLS6M5XJiJod6NVLGYqhQANaoynmnKHOAJyxMTrEjzC5Trpiu1c7D0Tme2kKjWk5Dm7S75dEwGePfXNdIuxVenTZWd2takKhaW/F2Ybme1xPxkBszqYi5N3vZ1Q/I6TZ6gWSLkQbiCNDoRvCHUiwaCfFeJ4bpF7XU3Bz81NuUODjmABcWgHcAYjSBGi9a6kdNtxQJMdo1rA4WuW5peBsBzDmDuWl0RP8AM4loRk+7JKWxTS/WQNwC6EUW7QtDCjYkshg8ZyTOjSTLhbYEV2Eafu2XRVsMlX0wNi08tmbxUVYoQIA8rITsOdgj3VqcqiQDonsLRFaKCJTpTZWTQAL6orWxfLPJQ5lxxnVmgEQYVsaBFLVsLjjjSfJ7LYo/ANS/YluhVpKhZOWOuiaTEA87QD6KLg06ghWDm8EJwG5KmhOAg7CjgVx3+odasKYo0BAImo8kCBNmidu08l3vZheCdNPr4vH1JL3U6dQvImGMYHd0RoCTAjU33JS54KxY4p3XRfY7DMwtF9WrX/jPab5QargBDG5ZhjRYSdSJ8KjA162HY7pCmGVqYaaRzgtLS8sOYtBO0ATP3iLSrjrj0bWdQfFJgyudme7vExEBuloi4JvI2AqlwHRz6XRGIz3LxNrjKKlOCbW0PktYKkayfJwlKqAYhdB1cxLqVekadQMFRwaXESG3AMiRMTvC5rIQTpzVkGHspjQh3mSw38cq6krMJHvmHp4sWf2B/mBfPiW5QJ8k9SBGpk+EDkFW9RukHYrB06tQgv7zHGPiLDAd4kZSeMroxSG8Llk2nRzuDYk506hDNEHYFZigDuUuwCVk+JlP9kb+GUf7MI+BPSBqhOxjQbJ7MFiS7F2YUfhup1cPNg4fXutPxH7/ACUW4pu0Sd40Wcps6MeOJ0C0AsyqYctUr7LsgSsgKbgoFqpxBG1haoZVIJLnsBfGuDKb3n7rXOvp3QSvEKTTSq9jqS7tqz8xHfc2adKB8Qh47pgAy7WF6l16LnUqdMXa52Z43splpIPAyF430f07TqVcRWqFwz12OYNhDwabR/a0MPkodObS9I1jwr+nq3SOFFTDAWlwgTpJXjvXHBtEtdUqVXUppl1PMaDCHl7mtsAXDMGm8CN+nqTKrMbgqjGy1waY36G1ribi29ec9d+j2hrQzPTbTbl7IPd2cwJe1mjXGBO83TxsJHEUdNZjzVzhx/8AHrG9g2Lx/uMMTyVO2lcalWzKgbRe1xjMWAf5hdmM55Hr3+jGOp1cNUoyM7KheG/e7N4b3o294G/HwXon2Vu9fN/+n3Shw+NoPEiX9m4b21O5B5lp/tC9wqdOuNssLnztRl/o4l8cjdqrsZ0mG2aVU4us929IPwz9ZAXNbkOUtVwg9fHEnWSlK3SLh9fktjBu57zpyQalMAXvv/YLRJHHKzYx5d+0pgVXQLG+78klka27QSg18QQZEj3V6p9Gdv2erNCwhV+H6WYbOlp43HmE+14OhBCcMkJLhnoyi12bIWpUXgb1AM3H1lDm/SEgwKXx2JZSpuqPcGMaJcToAo1S8RAzeBA91Tde8K6rgMQ0fFla+Nfge18eJyqXk4fHJSXJwn+oXXvD1GtbReZAcCS0izomB4D1Xk2AxJzFsMLQXPEgy3ugOLSYgw1us6Ky6T6JcML2xP8AvZI/tzSqA9zQ6tI5HVTDlN/TRquDrumWY3CtFSk6oaDwC2oyQIdfK4j4TfRcdjOkqric7iSdZmfVegdG9Y8QaTaVCmH0qNOnnHZ9o1znNDnZzEgTIABHwlJda6mGdg2vbTLK7qhNRrmgZZE92w7p2eC0gqJkcEzEOlN1sS6O+0EfhMxwNiCo04nRDxr7nkumKMWy36ExOWpTqv0FWnUdG5tQF0cpX0LXwtMGTLgbzsvpF183YR3cHAg8hM+4Xt3V7G5sLQk3FGmDJ1ytAn0WP6o3TQRdWXuIxOW1suwSfzVc7EiblY+oCNiCKjBZc8YmUpNhTixERPH6KHX6QzQ0jKOXyS1TD3kEtG8lRfhs0C3jK2UUYts26o0n4p52TfbNMTBHCB7KtdgSDBIjeAifYwDZxn62JtRJSZ1uM6H3CeEwBGwWVViadZuktGvdJMeq7itTB3JGs0DW3NeK4yxuuz3I5duGceek6jQQ4l2y4+itYPpqXQ4lnFpIXQ16NIm8FJV8FRdo0egPqrU17RrrfQxh8ZUbBFUkcQHDzKfq1TWpvYSyHscC5pLXCxhw4jVcdjsRQo57uBpgFwDxMO0sTeVVVuvdFrHZG1HugjKLm+yGz6kLWEn6MpwRzfXJ5GGDSID6znRET2ZfTLhwOXNzC83NbM4k7reGxdX1j6WrYmlTmlUzzUtkcAGkjIBbcqTo3oVxPfaReDp3QDe21x2bL+XfijrF2YTds9X6q9Gmh0U60Oe3tHb5cCRzDco5Lzfp3HF7shuBou7f1xaKJp9l93LqLLzPG1s1YkA3Nhx2K8ZMiFegWGCIS2JG3euu67YEOxDjTcC2GxBtZrQb+MrnKmAqaQD4Ob8yumJiwXR9SB4H0XoHVTp9jm06FTuFvdY6bOGxpOx27YffzxuGq0yXZHEbbcbI7akahw4EEFNxTVE2eyvxjKW0k3ubjwvokKvTQBmZ4D81znQ3Tra4ZSJIqABoJgh8aX/F7qyFN7XAhkRy9JULGl2EkmWFbGVajO60kcbJDtKoM6nWxvKsK+MquptaZEIeHw7oJLoniEk6Rk4m6OKxD/uEH15wnxhas3c33RBjgxvxMjjqgHpQu+Et8lm230hqKPQ6uIO48ioOrSPhcfEyoDA1R+HzQq9GowS4gDxN+Gi+cUpHuJQ+mqhptBdU7o+tI1XL9MdaaFIEhpJExJA9ISHW3poMtP1uXk3TXSLqhMk/Wxd35/zufL6MsuXXoumV6eJrSGFziTJc4wZJOgibnauqZ0aaTQLAbALAcgqvqB0J/D7U7TA8Bu5z5Lq8fRkFdMqT1XSMldWzma955quqMIlwvaCN4A18R+ng1j6uUxvVVXxbRINamw7Q7PPo1bRiZtkalRpmDPvzVZhiBWbzTZbScZGJog75qf8AgmuiMPg+0z4rENc1vwtok947c7nhpaOAmZ1EX2XBFWxjpakQcp1AVM5hldJ0/j8NWeXsxGHbIEDM4DQCHANsY3bVQvw9J3xYvDnhNQN8gwzzKuEuBSjToTq4jMMrbiZJ9hO79FOvijunxTPZUtBisMP7qv8A60p0g0MMB7HyAczCS2+zvAGeS1TRm0B+0tBBLIOsgkGdhXYUeuMjNUoNcDqWvc30uuHq6JjofGZXFrhmY4EEcdjm7iPVOSsSPROj+s+EdADSx2wPJieBmPOFbVOkf5SOS8gxQg90yF0HVrrARFKobaNcfuncT+H28NM3jQHXYnHTqHRuhJvxzQe61w5W9Qj1KVQ7B6Japham4eaFqPRnfdGdYKD6THv7rnCS0G2p0kzoFHHdO03Wa6wFgXDXzXAHCPNUVS15hpbBbMySZmOOkJiCNaRH9v6Lw1+eMXcT1Vz/ACKvrLh6latka5mZ12DOIgTOa3A6HVVDeqVYd6p2ZaO8QKhkgXIFrmy6hlAdp2mR+bLl07sTOmXVR6TpuqNpwyYqsf8ADBAEyb7V1xySVJGTxRdtl/0LWDMNTaAAQxsDZJaCZvrmLpQ+jul2VaVJ7y1jqgMNzTMEzE3NuCpHsqSTnqC/4Af+1CqYF7nMdnfLC7/bv3gBaAAiK+hJV0R6VoOfXfTblEZcsn4i4ScsTP6pDEdX8QZJY0wNp2Dkrk4R0gxVdGhLSO8TJMDkP7QjgVPwVfJ3utlJroy0TPM+nujzRruZYAExBkRNr74iUOlWyDKWAmzpJ2OAIGm6/Nek1OiWPu+hmIm72ucb328Vqt0RTcRnw7D3WtaHMcYa2QBraBC0WVe0R4X9OFHTGaGiiyTAF9psNiXZV7Y9m2mzM6Q24nNFgOJNua9Ap9D0WkObh6bXAgghj5BFwRexmESn0Wxru0bRYHzmzBj82Y6nNOqPNH4Hgl9OT6K6uVqgfkDA5jy1wc6HNI4RpxRqnVHFH/p/5/oupbhnME081Md1rsgqNEAOLbC5vK0X1/8Aq1/Oop88/Rawwrk5J3VHFafw/wDI/wDih0eqeIs4OokbCHm//FdrhqlUPa4vruAcCR/EMgEEiCNqWo0azGhrX1IH8jxx0j5p+eYeCBQdLdVHZh2JpgZGZsz3Xfka55bY2ku8IS1bqlUbTpkPaHES5znfwgXOqBjWkNkuIZPmuwoNq3DnPc0teDLXbWOH4Urh6NT7N2Ra8EGk5tnEAsL5sBaz0lmmKWGJddXuleyp4duIDH5WVWVC1ocS5pYaL5dDvhJB3mVb4vpzDFjjRpAvEQHshvxAGcpnQlcm7tt7v8CtZK+//iVhLHFu2aptKkepNrD8XqsbWG+friqgYhTNc7j5EJNElp2x/F6rRrkau9bqnOKA09Fgr7TbkUkhFx9oMSZWxidsxzP5Kk+0nYPOfyst/aJ4DerQmXf2rcT5qBxWwH1VKcRsH15BRdXGmnhPrZapk0XbsVG1Q+0neVTOr6XMeBWqlbS5+uSTYUXP2neT5qJxJ3nzKpzid8+ix2J3THJIC3biTGp5mSsGKnaqjtzMj68lo4kg7fkgZcHF7zz2eyj9qO0+qqDW3ERuKxmIPCN27zlAmW5xDvHwK03FbAZ8DdVhqbYCiaoJuBO+yBUWYxZO0+ZBWnVzx8/2Ve+rHHkVFlUaRH14IHQpRxAn42GNzXn3Kg7GzsbyJA9Qq1/SBdw5/nZbo4mTMm388gcphRRVlw2qA3NmYSdhL/TKLqFTFTw/yI8byqitj5jTylZTxAFybcLT5hNCZcjEAffZ5vPsEM4rw8ZPzVfXxm1t54tgeklAZiZPeOu5wb7gz5KgLhmJEat8yP3UKmInYORPzVf20XkweIPshnFzqRbkmBb06sXkf5ER6KNXEX1BHjKrhVFptxzfLKoDEcQPI+wQBaNr/wAwB2d+PaVCpijtAJ/qJ9Yj1VcK4O1s8h/2qNavBvrHj6kfNKgLMY0mwaN93OFt9hC1UxWkObycHX5/kq+jiYNyL2v3eOobwUquIaNonb8R9cqALFuIO0+HejzCG+vwHIz7fmq9mKZvHrPojPxANmkcLQf/AMoAbbinWGb1I9UOririHAnbDjbnCQbiPq3zCaZiQ7bPK/sgEGo46Zk235nRzA1C0K95zt8Bm9ilKj+M8jPsttrHeRxBPlEFAyvokiZ92D0M+6FUxT9O9HEj2AhJPcT93yb89Vh3kEeZ9E6JQ5TdviN+YCORngiHEkCJPDvjzACSNbdlH9qgXk6RO+IRQWMuqnWRz+ZJTNOo4T3ddvaD0EKva+P1A+Sx2IBmYJ/o275ToBurWInvO8cwPkAh0qu432mQ07UoKm6fKPaAptqN2ifFs80APdu6DdxG/tATfkgOrTciY33QalUAbIOzLCgKqKAfp4l0WNv68oHmFGtWNoMji/NHmQlmVrETA3QD8lF2Ibz/AKQEBYy2tGmu/Q+chM/atRmB8apPhAKqu3bu9AijGtA3eAEooBx+Lk6A+vyUmV5sONu0e30FlXnFNJ0dJ25T6laNblxN/dAFg8gixE7e+4+phCzeP+To/wCJhAGI3meV1F9QahxI8EAWAqjLEg2+9UdI9xPFQLjsk+DifayQGKA2jwI+a2a86e6VAQNR34j6D2Kiajh971SlTECLBk/W9ANUzeByHuFpQrHe24+f6rfafzeSTp1Y/Cf6r/siOqToKY8D+iKAbFY3g+3yWOefqUkavH1Q+04ooLHxV+gpfaSeHj9FItqbiyeKn228s8kUA06s47Wnxhani3w2JLtOI5QszDelQDnbOGhA/wAfkpjEm8kabJ90k2oI+Js+C3nP4m79PkigbDGpO0HxdPubLZeYs4jwdA9Ck+1HjyhY2oPoSigTLGrWOwt9ShF5O1p5ILcV/wDY3wgT5arKuIBjv+hHsEAGFT62KXbnRKduN/upNxAm7h4GfyQA5nMfE3zv7oJqcfUIJrt2OHMQhvfG0ckBYoa2yQOULG1N10EPW6cGZB8ZVEIbpaXDZ4/otGq4fdA8gPMlKnINjlsuadARG5A7DOqkfpdQDpvfwP180FzjssPrioirsdPIIGONqOGgF+P6qZqOvZh538oSQrN0hx5LbyImDzsgBgvO4A8lBjuJ5390uHA6LC+EUA7Tq/0G+2N3BTa950DY3WSbIImPJYKrR9w8wUCsKao3jkCsDt5+uSBO4O9PyWdqePl+iBjrKjtGlvkfmVIPMEEsHEC/qkGu3tLvECPZSDx+A8kAMkiL5fNuq0HN3jzS9V8fdtx/dQDkAOtfrBZwJEnnBWFzj95h5BJ9pvAPmiy2JDD9c0AKDN++VEl+w+jVptPaVp1Mbz7pkhWVHbcqEXHaTPjbwhQfSaNfYKHd3eaACN8ByRGkyNQPH5SgwNoUm0mn9kDGHPdsI8lAvcNT6whig0H8rLb6U6eslAWYX+Hl81mfiOYHvCGRC2y6AsOHu3+y21zvxeiEKXE8itGhuKBBHTO0rfZuicpjSYO6fa6CWxqU9R6drMAa18ZWtaLNs1pJaNOJHhZAwHZP3OmXNAgzmbBc2NZEiRxRhSqEAhpg6d03sDbeIIvxWUemXtOaGyDa3wgsZTyj+XKxg2/CmaXT9Yx3gcpBu1vxZS3N4wXDdc2QAn2VSNHeRi8R7t8xvWU8NUc7KGOLr2DTPdMO13G3inqPT9dps6Ll1gB3jBLvEkXGlzZBr9L1nEHOQQHgEWIDy0uh0z90X1QAo2k8zDH2EnuusILpNrCAT4ArHtcPiJbr8QcNLEXGxOHrBXbbMLWByjc6TfacxM/KyTxuLqVnBzzJAyjg2XEDzcUAf//Z"
          alt="Default"
          style={{ maxWidth: "300px", maxHeight: "300px",margin:"auto" }}
        />
      )}
      <br />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <br />
      <button>
        <label htmlFor="ruleChangeInput">Rule Change</label>
        <input
          type="file"
          id="ruleChangeInput"
          style={{ display: "none" }}
          onChange={handleRuleChange}
          accept="image/*"
        />
      </button>
      <button>
        <label htmlFor="barcodeChangeInput">Barcode Change</label>
        <input
          type="file"
          id="barcodeChangeInput"
          style={{ display: "none" }}
          onChange={handleBarcodeChange}
          accept="image/*"
        />
      </button>

      {changes.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h2>Changes Log</h2>
          <table style={{ margin: "auto",width:"70%",justifyContent:"space-around" }}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {changes.map((change, index) => (
                <tr key={index}>
                  <td>{change.type}</td>
                  <td>
                    <img
                      src={change.image}
                      alt={change.type}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Rule;
